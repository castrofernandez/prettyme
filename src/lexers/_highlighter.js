'use strict';

const Lexer = require('./aux/lexer');

class Highlighter {
  constructor(config) {
    this.lexer = config ? new Lexer(config) : null;
  }

  highlight(code) {
    return this.lexer ? this.lexer.highlight(code) : null;
  }

  lex(code) {
    return this.lexer ? this.lexer.lex(code) : null;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Highlighter;
}
