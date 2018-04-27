'use strict';

const Lexer = require('./aux/lexer');

const config = {
  comments: {
    type: 'comment',
    regex: /(<![ \r\n\t]*(--([^-]|[\r\n]|-[^-])*--[ \r\n\t]*)>)/g,
    class: ['comment']
  },
  patterns: [
    {
      type: 'in-angle',
      regex: /(<[^>]*>)/g,
      class: ['in-angle'],
      accumulative: true
    },
    {
      type: 'tag',
      regex: /<([^\s>/!]+)/g,
      class: ['tag', 'open']
    },
    {
      type: 'close',
      regex: /<\/([^\s>/!]+)>/g,
      class: ['tag', 'close']
    },
    {
      type: 'value',
      regex: /=\s*("[^"]*["\n\r]|'[^']*['\n\r]|[^\s"']*)/g,
      class: ['value']
    },
    {
      type: 'attribute',
      regex: /\s([^\s=/><"]+)/g,
      class: ['attribute']
    },
    {
      type: 'delimiter',
      regex: /(<\/|<|>|\/>|=)/g,
      class: ['delimiter']
    }
  ]
};

class HtmlHighlighter {
  constructor() {
    this.lexer = new Lexer(config);
  }

  highlight(code) {
    return this.lexer.highlight(code);
  }

  lex(code) {
    return this.lexer.lex(code);
  }
}

if (typeof module !== 'undefined') {
  module.exports = new HtmlHighlighter();
}
