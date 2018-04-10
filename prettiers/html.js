'use strict';

var htmlPrettier = (function() {
  var tab = 0;
  var output;

  function format(parser, code) {
    var elements = parser(code.trim());
    var i, element;
    var length = elements.length;

    output = [];

    for (i = 0; i < length; i++) {
      element = elements[i];

      if (!element) {
        continue;
      }

      formatElement(element);
      output.push('</p>');
    }

    return output.join('');
  }

  function formatElement(element) {
    switch(element.type) {
      case 'open':
        return formatOpenTag(element);
      case 'close':
        return formatCloseTag(element);
      case 'empty':
        return formatEmptyTag(element);
      case 'text':
        return formatText(element);
      case 'comment':
        return formatComment(element);
    }

    return null;
  }

  function formatOpenTag(element) {
    getTab();
    getOpenTag(element, '&gt;');
    tab++;
  }

  function formatCloseTag(element) {
    tab--;
    getTab();
    output.push('&lt;/');
    addClasses(element.tag, 'tag');
    output.push('&gt;');
  }

  function formatEmptyTag(element) {
    getTab();
    getOpenTag(element, ' /&gt;');
  }

  function formatText(element) {
    getTab();
    addClasses(element.value, 'text');
  }

  function formatComment(element) {
    getTab();
    addClasses(['&lt;!-- ', element.value, ' --&gt;'], 'comment');
  }

  function getOpenTag(element, closing) {
    output.push('&lt;');
    addClasses(element.tag, 'tag');
    getAttributes(element);
    output.push(closing);
  }

  function getAttributes(element) {
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
      addClasses(name, 'attribute ' + name);

      if (value) {
        output.push('=');
        addClasses(['"', value, '"'], 'value');
      }
    }
  }

  function getTab() {
    output.push('<p class="line');

    if (tab > 0) {
      output.push(' tab ');
      output.push(tab);
      output.push('x');
    }

    output.push('">');

    return output;
  }

  function addClasses(text, classes) {
    if (!text instanceof Array) {
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
  module.exports = htmlPrettier;
}