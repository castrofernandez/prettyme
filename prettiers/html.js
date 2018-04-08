'use strict';

var htmlPrettier = (function() {
  var tab = 0;

  function format(parser, code) {
    var elements = parser(code.trim());
    var output = [], i, element;
    var length = elements.length;

    for (i = 0; i < length; i++) {
      element = elements[i];

      if (!element) {
        continue;
      }

      formatElement(output, element);
      output.push('</p>');
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
    output.push('<p class="line');

    if (tab > 0) {
      output.push(' tab ');
      output.push(tab);
      output.push('x');
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
  module.exports = htmlPrettier;
}