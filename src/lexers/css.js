'use strict';

const Lexer = require('./aux/lexer');

const patterns = [
  {
    type: 'comment',
    regex: /(\/\*((?!\*\/).|\n)+\*\/)/g,
    class: 'comment'
  },
  {
    type: 'selector',
    regex: /[\s\n\r\t]*([^\s\n\r\t]+)[\s\n\r\t]*[^{]*{/g,
    class: 'selector'
  },
  {
    type: 'property',
    regex: /([a-zA-Z-]+)[^:;{]*:/g,
    class: 'property'
  },
  {
    type: 'function',
    regex: /([a-zA-Z\-_]*)[\s\t\r\n]*\(/g,
    class: 'value function'
  },
  {
    type: 'color',
    regex: /(#[0-9a-fA-F]{3,6})/g,
    class: 'value color'
  },
  {
    type: 'unit',
    regex: /([0-9.]+[a-zA-Z%]+)/g,
    class: 'value unit'
  },
  {
    type: 'number',
    regex: /([0-9.]+)/g,
    class: 'value number'
  },
  {
    type: 'value',
    regex: /:[\s\n\t\r]*([^;]*);/g,
    class: 'value'
  }
];

class CssHighlighter {
  constructor() {
    this.lexer = new Lexer(patterns);
  }

  highlight(code) {
    return this.lexer.highlight(code);
  }

  getTokens(code) {
    return this.lexer.getTokens(code);
  }
}

if (typeof module !== 'undefined') {
  module.exports = new CssHighlighter();
}
