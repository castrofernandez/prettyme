'use strict';

const Tokeniser = require('./tokeniser');

class Lexer {
  constructor(patterns) {
    this.patterns = patterns;
  }

  lex(code) {
    return this.getTokeniser(code).elements;
  }

  getTokeniser(code) {
    return new Tokeniser({
      content: code,
      patterns: this.patterns
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = Lexer;
}
