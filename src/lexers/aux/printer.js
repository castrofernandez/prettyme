'use strict';

class Printer {
  constructor(options) {
    this.options = options;
  }

  get code() {
    return this.options.code;
  }

  get tokens() {
    return this.options.tokens;
  }

  insertTokens() {
    let output = [];

    this.tokens.sort((a, b) => {
      return a.index > b.index;
    });

    let previousIndex = 0;

    this.tokens.forEach(token => {
      output.push(this.escape(this.code.substring(previousIndex, token.index)));
      output.push(`<span class="${token.className}">${this.escape(token.value)}</span>`);

      previousIndex = token.index + token.length;
    });

    output.push(this.escape(this.code.substring(previousIndex)));

    return output.join('');
  }

  escape(code) {
    return code.replace('<', '&lt;').replace('>', '&gt;');
  }
}

if (typeof module !== 'undefined') {
  module.exports = Printer;
}
