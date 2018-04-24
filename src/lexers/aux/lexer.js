'use strict';

const Tokeniser = require('./tokeniser');
const Formatter = require('./formatter');

class Lexer {
  constructor(patterns) {
    this.patterns = patterns;
  }

  highlight(code) {
    return this.formatLines(this.lex(code));
  }

  lex(code) {
    const tokens = this.getTokeniser(code).elements;

    return new Formatter({
      code: code,
      tokens: tokens
    }).insertTokens();
  }

  formatLines(lines) {
    return [
      '<p class="line">',
      lines.split('\n').join('</p><p class="line">'),
      '</p>'
    ].join('');
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
