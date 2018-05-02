'use strict';

const Lexer = require('../lib/lexer');

class Highlighter {
  constructor(config) {
    this.lexer = config ? new Lexer(config) : null;
  }

  highlight(code, options = {}) {
    return this.lexer ? this.lexer.highlight(code, options) : null;
  }

  lex(code, options = {}) {
    return this.lexer ? this.lexer.lex(code, options) : null;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Highlighter;
}
