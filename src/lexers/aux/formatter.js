'use strict';

const Utils = require('../../utils/utils');

class Formatter {
  constructor(options) {
    this.options = options;
  }

  get code() {
    return this.options.code;
  }

  get tokens() {
    return this.options.tokens;
  }

  insertTokens() {
    return this.performInsertTokens(this.tokens, this.code);
  }

  performInsertTokens(tokens, code) {
    let output = [];
    let previousIndex = 0;
    let index;
    let value;
    let className;

    tokens.forEach(token => {
      index = token.wrapper ? token.start : token.index;
      output.push(Utils.escape(code.substring(previousIndex, index)));

      if (token.wrapper) {
        className = new Set(token.className);
        className.add('token-wrapper');
        value = this.performInsertTokens(token.elements, token.content);
        output.push(this.formatWrapper(value, className));
      } else {
        output.push(this.formatValue(token.value, token.className));
      }

      previousIndex = index + token.length;
    });

    output.push(Utils.escape(code.substring(previousIndex)));

    return output.join('');
  }

  formatWrapper(value, className) {
    return this.formatContainer(value, className, 'div');
  }

  formatValue(value, className) {
    return this.formatContainer(Utils.escape(value), className, 'span');
  }

  formatContainer(value, className, tag) {
    const start = `<${tag} class="${Array.from(className).join(' ')}">`;
    const end = `</${tag}>`;

    return value.split('\n').map(line => {
      return line.trim() !== '' ? `${start}${line}${end}` : line;
    }).join('\n');
  }

  format() {
    const lines = this.insertTokens();

    return Utils.formatLines(lines);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Formatter;
}
