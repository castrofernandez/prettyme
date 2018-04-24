'use strict';

const Lexer = require('./aux/lexer');

const patterns = [
  {
    type: 'comment',
    regex: /(<![ \r\n\t]*(--([^-]|[\r\n]|-[^-])*--[ \r\n\t]*)>)/g,
    class: 'comment'
  },
  {
    type: 'open-comment',
    regex: /(<![ \r\n\t]*--)/g,
    class: 'comment open'
  },
  {
    type: 'close-comment',
    regex: /(--[ \r\n\t]*)>/g,
    class: 'comment close'
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
    type: 'text',
    regex: />([^<]*)</g,
    class: 'text'
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
  constructor() {
    this.lexer = new Lexer(patterns);
  }

  highlight(code) {
    return this.lexer.highlight(code);
  }

  getTokens(code) {
    return this.lexer.getTokens(code);
  }
}

if (typeof module !== 'undefined') {
  module.exports = new HtmlHighlighter();
}
