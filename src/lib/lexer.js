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

  lex(code, options = {}) {
    return this.getTokeniser(code, options).elements;
  }

  highlight(code, options = {}) {
    return new LexerFormatter({
      code: code,
      tokens: this.lex(code, options),
      custom: options
    }).format();
  }

  getTokeniser(code, options = {}) {
    return new Tokeniser({
      content: code,
      comments: this.comments,
      patterns: this.patterns,
      custom: options
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = Lexer;
}
