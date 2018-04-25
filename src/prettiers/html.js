'use strict';

class HtmlPrettier {
  constructor() {
    this.tab = 0;
    this.line = 0;
    this.outputLines = null;
  }

  format(parser, code) {
    const elements = parser(code.trim());
    let i;
    let element;
    const length = elements.length;

    this.tab = 0;
    this.line = 0;
    this.outputLines = [{}];

    for (i = 0; i < length; i++) {
      element = elements[i];

      if (!element) {
        continue;
      }

      this.formatElement(element);
      this.outputLines.push({});
      this.line++;
    }

    return this.formatLines();
  }

  formatLines() {
    const output = [];

    this.outputLines.filter(line => line.value).forEach(line => {
      const tab = line.tab;
      const value = line.value;
      const lineClass = tab ? `line tab ${tab}x` : 'line';

      output.push(
        `<p class="${lineClass}">${value.join('')}</p>`
      );
    });

    return output.join('');
  }

  formatElement(element) {
    switch (element.type) {
      case 'open':
        return this.formatOpenTag(element);
      case 'close':
        return this.formatCloseTag(element);
      case 'empty':
        return this.formatEmptyTag(element);
      case 'text':
        return this.formatText(element);
      case 'comment':
        return this.formatComment(element);
    }

    return null;
  }

  formatOpenTag(element) {
    this.getTab();
    this.getOpenTag(element, '&gt;');
    this.tab++;
  }

  formatCloseTag(element) {
    this.tab--;
    this.getTab();
    this.push('&lt;/');
    this.addClasses(element.tag, 'tag');
    this.push('&gt;');
  }

  formatEmptyTag(element) {
    this.getTab();
    this.getOpenTag(element, ' /&gt;');
  }

  formatText(element) {
    this.getTab();
    this.addClasses(element.value, 'text');
  }

  formatComment(element) {
    this.getTab();
    this.addClasses(['&lt;!-- ', element.value, ' --&gt;'], 'comment');
  }

  getOpenTag(element, closing) {
    this.push('&lt;');
    this.addClasses(element.tag, 'tag');
    this.getAttributes(element);
    this.push(closing);
  }

  getAttributes(element) {
    const attributes = element.attributes;
    const length = attributes.length;
    let attribute;
    let name;
    let value;
    let i;

    if (length < 1) {
      return;
    }

    for (i = 0; i < length; i++) {
      attribute = attributes[i];
      name = attribute.name;
      value = attribute.value;

      this.push(' ');
      this.addClasses(name, 'attribute ' + name);

      if (value) {
        this.push('=');
        this.addClasses(['"', value, '"'], 'value');
      }
    }
  }

  getTab() {
    this.outputLines[this.line].tab = this.tab;
  }

  addClasses(text, classes) {
    if (!(text instanceof Array)) {
      text = [text];
    }

    const length = text.length;
    let i;

    this.push('<span class="');
    this.push(classes);
    this.push('">');

    for (i = 0; i < length; i++) {
      this.push(text[i]);
    }

    this.push('</span>');
  }

  push(text) {
    if (!this.outputLines[this.line].value) {
      this.outputLines[this.line].value = [];
    }

    this.outputLines[this.line].value.push(text);
  }
};

if (typeof module !== 'undefined') {
  module.exports = new HtmlPrettier();
}
