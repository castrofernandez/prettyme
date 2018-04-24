'use strict';

class Formatter {
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

    let previousIndex = 0;

    this.tokens.forEach(token => {
      output.push(this.escape(this.code.substring(previousIndex, token.index)));
      output.push(this.formatValue(token.value, token.className));

      previousIndex = token.index + token.length;
    });

    output.push(this.escape(this.code.substring(previousIndex)));

    return output.join('');
  }

  formatValue(value, className) {
    const start = `<span class="${className}">`;
    const end = '</span>';

    return [
      start,
      this.replaceAll(this.escape(value), '\n', `${end}\n${start}`),
      end
    ].join('');
  }

  escape(code) {
    const replaced = this.replaceAll(code, '<', '&lt;');
    return this.replaceAll(replaced, '>', '&gt;');
  }

  replaceAll(str, search, replace) {
    return str.split(search).join(replace);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Formatter;
}
