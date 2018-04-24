'use strict';

const patterns = [
  {
    type: 'comment',
    regex: /(<![ \r\n\t]*(--([^-]|[\r\n]|-[^-])*--[ \r\n\t]*)>)/g,
    class: 'comment'
  },
  {
    type: 'tag',
    regex: /<([^\s>/!]+)/g,
    class: 'tag open'
  },
  {
    type: 'close',
    regex: /<\/([^\s>/!]+)>/g,
    class: 'tag close'
  },
  {
    type: 'value',
    regex: /=\s*("[^"]*"|'[^']*'|[^\s"']*)/g,
    class: 'value'
  },
  {
    type: 'attribute',
    regex: /\s([^\s=/><"]+)/g,
    class: 'attribute'
  }
];

class HtmlHighlighter {
  highlight(code) {
    const lines = code.split('\n');
    let tokens = [];
    let output = [];

    lines.forEach(line => {
      tokens = this.getTokens(line);

      if (line.trim() !== '') {
        output.push(
          '<p class="line">',
          this.insertTokens(line, tokens),
          '</p>'
        );
      }
    });

    return output.join('');
  }

  insertTokens(code, tokens) {
    let output = [];

    tokens.sort((a, b) => {
      return a.index > b.index;
    });

    let previousIndex = 0;

    tokens.forEach(token => {
      output.push(this.escape(code.substring(previousIndex, token.index)));
      output.push(`<span class="${token.className}">${this.escape(token.value)}</span>`);

      previousIndex = token.index + token.length;
    });

    output.push(this.escape(code.substring(previousIndex)));

    return output.join('');
  }

  escape(code) {
    return code.replace('<', '&lt;').replace('>', '&gt;');
  }

  getTokens(code) {
    if (!code || code.trim() === '') {
      return [];
    }

    return new TokenList({
      content: code,
      patterns: patterns
    }).elements;
  }
}

class TokenList {
  constructor(options) {
    this.options = options;
    this.elements = this.getElements();
  }

  getElements() {
    return new Token({
      content: this.content,
      patterns: this.patterns,
      index: 0
    }).elements.sort((a, b) => { return a.index > b.index; });
  }

  get content() {
    return this.options.content;
  }

  get patterns() {
    return this.options.patterns;
  }
}

class Token {
  constructor(options) {
    this.options = options;
    this.elements = [];

    if (!this.empty) {
      this.applyPatterns(this.patterns);
    }
  }

  get type() {
    return this.options.type;
  }

  get value() {
    return this.options.value;
  }

  get index() {
    return this.options.index;
  }

  get className() {
    return this.options.className;
  }

  get length() {
    return this.options.length;
  }

  get content() {
    return this.options.content;
  }

  get patterns() {
    return this.options.patterns || [];
  }

  get empty() {
    return !this.content || this.content.trim() === '';
  }

  applyPatterns(patterns) {
    if (patterns.length === 0) {
      return;
    }

    const pattern = patterns[0];
    const otherPatterns = patterns.slice(1);
    const type = pattern.type;
    const regex = pattern.regex;
    const className = pattern.class;
    let matches = regex.exec(this.content);
    let value;
    let index;
    let length;
    let previousIndex = 0;

    while (matches) {
      value = matches[1];
      index = matches.index + this.content.substring(matches.index).indexOf(value);
      length = value.length;

      this.processPart({
        content: this.content.substring(previousIndex, index),
        patterns: otherPatterns,
        index: this.index + previousIndex
      });

      this.elements.push(new Token({
        type: type,
        value: value,
        index: this.index + index,
        length: length,
        className: className
      }));

      previousIndex = index + length;
      matches = regex.exec(this.content);
    }

    this.processPart({
      content: this.content.substring(previousIndex),
      patterns: otherPatterns,
      index: this.index + previousIndex
    });
  }

  processPart(options) {
    const content = options.content.trim();

    if (content === '') {
      return;
    }

    this.elements = this.elements.concat(new Token(options).elements);
  }
}

if (typeof module !== 'undefined') {
  module.exports = new HtmlHighlighter();
}
