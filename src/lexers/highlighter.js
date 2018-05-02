'use strict';

const Lexer = require('../lib/lexer');

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
