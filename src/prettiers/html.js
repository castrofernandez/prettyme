'use strict';

const htmlPrettier = (function() {
  var tab = 0;
  var line = 0;
  var outputLines;

  function format(parser, code) {
    var elements = parser(code.trim());
    var i, element;
    var length = elements.length;

    tab = 0;
    line = 0;
    outputLines = [{}];

    for (i = 0; i < length; i++) {
      element = elements[i];

      if (!element) {
        continue;
      }

      formatElement(element);
      outputLines.push({});
      line++;
    }

    return formatLines();
  }

  function formatLines() {
    let output = [];

    outputLines.filter(line => line.value).forEach(line => {
      const tab = line.tab;
      const value = line.value;
      const lineClass = tab ? `line tab ${tab}x`: 'line';

      output.push(
        `<p class="${lineClass}">${value.join('')}</p>`
      );
    });

    return output.join('');
  }

  function formatElement(element) {
    switch (element.type) {
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
    push('&lt;/');
    addClasses(element.tag, 'tag');
    push('&gt;');
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
    push('&lt;');
    addClasses(element.tag, 'tag');
    getAttributes(element);
    push(closing);
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

      push(' ');
      addClasses(name, 'attribute ' + name);

      if (value) {
        push('=');
        addClasses(['"', value, '"'], 'value');
      }
    }
  }

  function getTab() {
    outputLines[line].tab = tab;
  }

  function addClasses(text, classes) {
    if (!(text instanceof Array)) {
      text = [text];
    }

    var length = text.length;
    var i;

    push('<span class="');
    push(classes);
    push('">');

    for (i = 0; i < length; i++) {
      push(text[i]);
    }

    push('</span>');
  }

  function push(text) {
    if (!outputLines[line].value) {
      outputLines[line].value = [];
    }

    outputLines[line].value.push(text);
  }

  return {
    format: format
  };
})();

if (typeof module !== 'undefined') {
  module.exports = htmlPrettier;
}
