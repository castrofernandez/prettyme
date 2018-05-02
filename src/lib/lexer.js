'use strict';

const Tokeniser = require('./tokeniser');
const LexerFormatter = require('./formatter');

class Lexer {
  constructor(config) {
    this.config = config;
  }

  get comments() {
    return this.config.comments;
  }

  get patterns() {
    return this.config.patterns;
  }

  lex(code) {
    return this.getTokeniser(code).elements;
  }

  highlight(code) {
    return new LexerFormatter({
      code: code,
      tokens: this.lex(code)
    }).format();
  }

  getTokeniser(code) {
    return new Tokeniser({
      content: code,
      comments: this.comments,
      patterns: this.patterns
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = Lexer;
}
