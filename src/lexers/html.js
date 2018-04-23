'use strict';

const patterns = {
  open: {
    regex: /<([^\s>/!]+)\s*([^/>]*)\/?>/g,
    attributes: true,
    class: 'tag open'
  },
  close: {
    regex: /<\/([^\s>/!]+)>/g,
    class: 'tag close'
  },
  comment: {
    regex: /(<![ \r\n\t]*(--([^-]|[\r\n]|-[^-])*--[ \r\n\t]*)>)/g,
    class: 'comment'
  }
};

const attributePattern = /([^\s=]+)\s*=?\s*([^\s]*)/g;

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
      output.push(`<span class="${token.class}">${this.escape(token.value)}</span>`);

      previousIndex = token.index + token.length;
    });

    output.push(this.escape(code.substring(previousIndex)));

    return output.join('');
  }

  escape(code) {
    return code.replace('<', '&lt;').replace('>', '&gt;');
  }

  getTokens(code) {
    const tokens = [];
    let key;
    let regex;
    let hasAttributes;
    let matches;
    let value;
    let attributes;
    let index;
    let theClass;

    for (key in patterns) {
      regex = patterns[key].regex;
      hasAttributes = patterns[key].attributes;
      theClass = patterns[key].class;
      matches = regex.exec(code);

      while (matches) {
        value = matches[1];
        attributes = matches[2];
        index = matches.index + code.substring(matches.index).indexOf(value);

        tokens.push({
          type: key,
          value: value,
          index: index,
          length: value.length,
          class: theClass
        });

        if (hasAttributes && attributes) {
          attributes = new AttributeHandler({
            tokens: tokens,
            code: attributes,
            start: index + code.substring(index).indexOf(attributes)
          });
        }

        matches = regex.exec(code);
      }
    }

    return tokens;
  }
}

class AttributeHandler {
  constructor(options) {
    this.options = options;
    this.getAttributes();
  }

  get tokens() {
    return this.options.tokens;
  }

  get code() {
    return this.options.code;
  }

  get start() {
    return this.options.start;
  }

  getAttributes() {
    let attribute;
    let value;
    let matches = attributePattern.exec(this.code);

    while (matches) {
      attribute = matches[1];
      value = matches[2];

      this.tokens.push({
        type: 'attribute',
        class: 'attribute',
        value: attribute,
        index: this.start + matches.index,
        length: attribute.length
      });

      if (this.hasValue(value)) {
        this.tokens.push({
          type: 'value',
          class: 'value',
          value: value,
          index: this.start + matches.index + this.code.substring(matches.index).indexOf(value),
          length: value.length
        });
      }

      matches = attributePattern.exec(this.code);
    }
  }

  hasValue(value) {
    return value !== '' && value !== '""';
  }
}

if (typeof module !== 'undefined') {
  module.exports = new HtmlHighlighter();
}
