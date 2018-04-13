'use strict';

const cssPrettier = (function() {
  var outputLines;
  var line = 0;

  function format(parser, code) {
    var rules = parser(code.trim());
    var i, rule;
    var length = rules.length;

    outputLines = [];
    line = -1;
    newLine();

    for (i = 0; i < length; i++) {
      rule = rules[i];

      if (!rule) {
        continue;
      }

      formatRule(rule);
    }

    return formatLines();
  }

  function formatLines() {
    let output = [];

    outputLines.filter(line => line.value).forEach(line => {
      const tab = line.tab;
      const value = line.value;
      const lineClass = tab ? `line tab`: 'line';

      output.push(
        `<p class="${lineClass}">${value.join('')}</p>`
      );
    });

    return output.join('');
  }

  function formatRule(rule) {
    rule.comments = rule.comments || {};

    if (rule.comments.p1) {
      getTab(false);
      formatComments(rule.comments.p1);
    }

    formatSelector(rule);
    formatDeclarations(rule);
    formatClosing();

    if (rule.comments.p5) {
      getTab(false);
      formatComments(rule.comments.p5);
    }
  }

  function formatSelector(rule) {
    getTab(false);
    addClasses(rule.selector, 'selector');
    formatComments(rule.comments.p2);
    push('{');
    formatComments(rule.comments.p3);
    newLine();
  }

  function formatDeclarations(rule) {
    var declarations = rule.declarations;
    var length = declarations.length;
    var declaration, i, property, value, comments;

    for (i = 0; i < length; i++) {
      declaration = declarations[i];
      property = declaration.property;
      value = declaration.value;
      comments = declaration.comments || {};
      getTab(true);

      formatComments(comments.p1);
      addClasses(property, 'property');
      formatComments(comments.p2);
      push(':');
      formatComments(comments.p3);

      formatValue(value, [], true);

      formatComments(comments.p4);
      push(';');
      formatComments(comments.p5);
      newLine();
    }
  }

  function formatValue(values, classes, addPositionClasses) {
    var length = values.length;
    var i;

    for (i = 0; i < length; i++) {
      getValue(values[i], addPositionClasses ? getParamClass(classes, i, length) : classes);
    }
  }

  function getValue(value, classes) {
    classes = classes || '';

    switch (value.type) {
      case 'function':
        getFunctionValue(value, classes);
        break;
      case 'comment':
        addClasses(['/* ', value.value, ' */'], mergeClasses(['value comment'], classes));
        break;
      case 'string':
        addClasses(['\'', value.value, '\''], mergeClasses(['value string'], classes));
        break;
      default:
        addClasses(value.value, mergeClasses(['value', value.type], classes));
    }

    addColourPreview(value);
  }

  function getFunctionValue(value, classes) {
    addClasses(value.name, mergeClasses(['value function'], classes));
    push('(');
    getFunctionParams(value.params);
    push(')');
  }

  function addColourPreview(value) {
    var colour = getColour(value);

    if (colour) {
      push(['<span class="color-preview" style="background-color:', colour, ';"></span>'].join(''));
    }
  }

  function getColour(value) {
    var type = value.type;

    if (type === 'color') {
      return value.value;
    }

    if (type !== 'function' || ['rgb', 'rgba', 'hsl', 'hsla'].indexOf(value.name) === -1) {
      return null;
    }

    return getColourFunction(value);
  }

  function getColourFunction(value) {
    var result = [value.name, '('];
    var processedParams = [];
    var params = value.params;
    var param;
    var length = params.length;
    var i;
    var j;

    for (i = 0; i < length; i++) {
      param = params[i];

      for (j = 0; j < param.length; j++) {
        if (param[j].type === 'comment') {
          continue;
        }

        processedParams.push(param[j].value);
      }
    }

    result.push(processedParams.join(','), ')');

    return result.join('');
  }

  function mergeClasses(a, b) {
    return a.concat(b).join(' ').replace(/ +(?= )/g, '');
  }

  function getFunctionParams(params) {
    var length = params.length;
    var i;
    var param;

    for (i = 0; i < length; i++) {
      param = params[i];
      formatValue(param, getParamClass(['param'], i, length), false);

      if (i < length - 1) {
        push(',');
      }
    }
  }

  function getParamClass(classes, pos, length) {
    var result = new Array(classes) || [];

    result.push('p' + pos);

    if (pos === 0) {
      result.push('first');
    }

    if (pos === length - 1) {
      result.push('last');
    }

    return result;
  }

  function formatClosing() {
    getTab(false);
    push('}');
    newLine();
  }

  function formatComments(comments) {
    if (!comments) {
      return;
    }

    var length = comments.length;
    var i;

    for (i = 0; i < length; i++) {
      addClasses(['/* ', comments[i], ' */'], 'comment');
    }
  }

  function getTab(tab) {
    outputLines[line].tab = tab ? 1 : 0;
  }

  function newLine() {
    outputLines.push({});

    line++;
  }

  function addClasses(text, classes) {
    if (!(text instanceof Array)) {
      text = [text];
    }

    var length = text.length;
    var i;

    push('<span class="', classes, '">');

    for (i = 0; i < length; i++) {
      push(text[i]);
    }

    push('</span>');
  }

  function push(...text) {
    if (!outputLines[line].value) {
      outputLines[line].value = [];
    }

    text.forEach(value => {
      outputLines[line].value.push(value);
    });
  }

  return {
    format: format
  };
})();

if (typeof module !== 'undefined') {
  module.exports = cssPrettier;
}
