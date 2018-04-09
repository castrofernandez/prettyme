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
    var selector = rule.selector;
    var declarations = rule.declarations;
    var comments = rule.comments || {};

    if (comments.p1) {

    }

    formatSelector(output, selector);
    formatDeclarations(output, declarations);
    formatClosing(output);
  }

  function formatSelector(output, selector) {
    getTab(output, false);
    addClasses(output, selector, 'selector');
    output.push(': {');
    output.push('</p>');
  }

  function formatDeclarations(output, declarations) {
    var length = declarations.length;
    var declaration, i, property, value;

    for (i = 0; i < length; i++) {
      declaration = declarations[i];
      property = declaration.property;
      value = declaration.value;
      getTab(output, true);

      addClasses(output, property, 'property');
      output.push(': ');
      addClasses(output, value, 'value');
      output.push(';');
      output.push('</p>');
    }
  }

  function formatClosing(output) {
    getTab(output, false);
    output.push('}');
    output.push('</p>');
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
    output.push('<span class="');
    output.push(classes);
    output.push('">');
    output.push(text);
    output.push('</span>');
  }

  return {
    format: format
  };
})();

if (typeof module !== 'undefined') {
  module.exports = cssPrettier;
}