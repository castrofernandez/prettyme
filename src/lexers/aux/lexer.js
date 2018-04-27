'use strict';

const Tokeniser = require('./tokeniser');

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
