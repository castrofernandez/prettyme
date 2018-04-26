'use strict';

class Formatter {
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

    this.outputLines = [];
    this.line = -1;
    this.newLine();

    for (i = 0; i < length; i++) {
      element = elements[i];

      if (!element) {
        continue;
      }

      this.formatElement(element);
    }

    return this.formatLines(this.outputLines);
  }

  formatElement(element) {

  }

  addClasses(text, classes) {
    if (!(text instanceof Array)) {
      text = [text];
    }

    const length = text.length;
    let i;

    this.push('<span class="', classes, '">');

    for (i = 0; i < length; i++) {
      this.push(text[i]);
    }

    this.push('</span>');
  }

  push(...text) {
    if (!this.outputLines[this.line].value) {
      this.outputLines[this.line].value = [];
    }

    text.forEach(value => {
      this.outputLines[this.line].value.push(value);
    });
  }

  formatLines(lines) {
    const output = [];

    lines.filter(line => line.value).forEach(line => {
      const tab = line.tab;
      const value = line.value;
      const lineClass = tab ? `line tab ${tab}x` : 'line';

      output.push(
        `<p class="${lineClass}">${value.join('')}</p>`
      );
    });

    return output.join('');
  }

  newLine() {
    this.outputLines.push({});
    this.line++;
  }
};

if (typeof module !== 'undefined') {
  module.exports = Formatter;
}
