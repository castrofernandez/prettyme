'use strict';

const htmlGrammar = require('../grammars/html');

var prettier = (function() {
  var tab = 0;

  function format(code) {
    var elements = htmlGrammar.parse(code);
    var output = [], i;
    var length = elements.length;

    for (i = 0; i < length; i++) {
      formatElement(output, elements[i]);
      output.push('\n');
    }

    return output.join('');
  }

  function formatElement(output, element) {
    switch(element.type) {
      case 'open':
        return formatOpenTag(output, element);
      case 'close':
        return formatCloseTag(output, element);
      case 'empty':
        return formatEmptyTag(output, element);
      case 'text':
        return formatText(output, element);
    }

    return null;
  }

  function formatOpenTag(output, element) {
    getTab(output);
    getOpenTag(output, element, '&gt;');
    tab++;
  }

  function formatCloseTag(output, element) {
    tab--;
    getTab(output);
    output.push('&lt;/');
    addClasses(output, element.tag, 'tag');
    output.push('&gt;');
  }

  function formatEmptyTag(output, element) {
    getTab(output);
    getOpenTag(output, element, ' /&gt;');
  }

  function formatText(output, element) {
    getTab(output);
    addClasses(output, element.value, 'text');
  }

  function getOpenTag(output, element, closing) {
    output.push('&lt;');
    addClasses(output, element.tag, 'tag');
    getAttributes(output, element);
    output.push(closing);
  }

  function getAttributes(output, element) {
    var attributes = element.attributes;
    var length = attributes.length;
    var attribute, name, value, i;

    if (length < 1) {
      return;
    }

    for (i = 0; i < length; i++) {
      attribute = attributes[i];
      name = attribute.name;
      value = attribute.value;

      output.push(' ');
      addClasses(output, name, 'attribute');

      if (value) {
        output.push('=');
        addClasses(output, '"' + value + '"', 'value');
      }
    }
  }

  function getTab(output) {
    if (tab > 0) {
      output.push('<span class="tab ');
      output.push(tab);
      output.push('x"></tab>');
    }

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
    parse: htmlGrammar.parse,
    format: format
  };
})();

if (typeof module !== 'undefined') {
  module.exports = prettier;
}