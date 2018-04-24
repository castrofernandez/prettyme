'use strict';

const Tokenizer = require('./tokenizer');
const Printer = require('./printer');

class Lexer {
  constructor(patterns) {
    this.patterns = patterns;
  }

  highlight(code) {
    const lines = code.split('\n');
    let tokens = [];
    let output = [];

    lines.forEach(line => {
      tokens = this.getTokens(line);

      if (line.trim() !== '') {
        output.push(
          '<p class="line">',
          new Printer({
            code: line,
            tokens: tokens
          }).insertTokens(),
          '</p>'
        );
      }
    });

    return output.join('');
  }

  getTokens(code) {
    return new Tokenizer({
      content: code,
      patterns: this.patterns
    }).elements;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Lexer;
}
