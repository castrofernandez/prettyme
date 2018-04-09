'use strict';

var cssPrettier = (function() {
  function format(parser, code) {
    var rules = parser(code.trim());
    var output = [], i, rule;
    var length = rules.length;

    for (i = 0; i < length; i++) {
      rule = rules[i];

      if (!rule) {
        continue;
      }

      formatRule(output, rule);
    }

    return output.join('');
  }

  function formatRule(output, rule) {
    rule.comments = rule.comments || {};

    if (rule.comments.p1) {
      getTab(output, false);
      formatComments(output, rule.comments.p1);
    }

    formatSelector(output, rule);
    formatDeclarations(output, rule);
    formatClosing(output);

    if (rule.comments.p5) {
      getTab(output, false);
      formatComments(output, rule.comments.p5);
    }
  }

  function formatSelector(output, rule) {
    getTab(output, false);
    addClasses(output, rule.selector, 'selector');
    formatComments(output, rule.comments.p2);
    output.push('{');
    formatComments(output, rule.comments.p3);
    output.push('</p>');
  }

  function formatDeclarations(output, rule) {
    var declarations = rule.declarations;
    var length = declarations.length;
    var declaration, i, property, value, comments;

    for (i = 0; i < length; i++) {
      declaration = declarations[i];
      property = declaration.property;
      value = declaration.value;
      comments = declaration.comments || {};
      getTab(output, true);

      formatComments(output, comments.p1);
      addClasses(output, property, 'property');
      formatComments(output, comments.p2);
      output.push(': ');
      formatComments(output, comments.p3);
      
      formatValue(output, value);

      formatComments(output, comments.p4);
      output.push(';');
      formatComments(output, comments.p5);
      output.push('</p>');
    }
  }

  function formatValue(output, values) {
    var length = values.length, value, i;

    for (i = 0; i < length; i++) {
      value = getValue(output, values[i]);
    }
  }

  function getValue(output, value) {
    switch(value.type) {
      case 'function':
        addClasses(output, value.name, 'value function');
        output.push('(');
        getFunctionParams(output, value.params);
        output.push(')');
        break;
      case 'comment':
        addClasses(output, ['/* ', value.value, ' */'], 'value comment');
        break
      default:
        addClasses(output, value.value, 'value ' + value.type);
    }
  }

  function getFunctionParams(output, params) {
    var length = params.length, i, param;

    for (i = 0; i < length; i++) {
      param = params[i];
      formatValue(output, param);

      if (i < length - 1) {
        output.push(',');
      }
    }
  }

  function formatClosing(output) {
    getTab(output, false);
    output.push('}');
    output.push('</p>');
  }

  function formatComments(output, comments) {
    if (!comments) {
      return;
    }

    var length = comments.length;
    var i;

    for (i = 0; i < length; i++) {
      addClasses(output, ['/* ', comments[i], ' */'], 'comment');
    }
  }

  function getTab(output, tab) {
    output.push('<p class="line');

    if (tab) {
      output.push(' tab');
    }

    output.push('">');

    return output;
  }

  function addClasses(output, text, classes) {
    if (!(text instanceof Array)) {
      text = [text];
    }

    var length = text.length, i;

    output.push('<span class="');
    output.push(classes);
    output.push('">');
    
    for (i = 0; i < length; i++) {
      output.push(text[i]);
    }

    output.push('</span>');
  }

  return {
    format: format
  };
})();

if (typeof module !== 'undefined') {
  module.exports = cssPrettier;
}