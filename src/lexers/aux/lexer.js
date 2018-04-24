'use strict';

const Tokeniser = require('./tokeniser');
const Printer = require('./printer');

class Lexer {
  constructor(patterns) {
    this.patterns = patterns;
  }

  highlight(code) {
    const lines = code.split('\n');
    let tokeniser;
    let tokens = [];
    let output = [];
    let inComment = false;

    lines.forEach(line => {
      tokeniser = this.getTokeniser(line);
      tokens = tokeniser.elements;
      inComment = inComment && !tokeniser.includes('close-comment');

      if (line.trim() !== '') {
        output.push(
          '<p class="line',
          inComment ? ' commented' : '',
          '">',
          new Printer({
            code: line,
            tokens: tokens
          }).insertTokens(),
          '</p>'
        );
      }

      if (tokeniser.includes('open-comment')) {
        inComment = true;
      }      
    });

    return output.join('');
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
