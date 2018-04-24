'use strict';

const Lexer = require('./aux/lexer');

const patterns = [
  {
    type: 'comment',
    regex: /(<![ \r\n\t]*(--([^-]|[\r\n]|-[^-])*--[ \r\n\t]*)>)/g,
    class: 'comment'
  },
  {
    type: 'in-angles',
    regex: /(<[^>]*>)/g,
    class: 'in-angles',
    accumulative: true
  },
  {
    type: 'open-comment',
    regex: /(<!--)/g,
    class: 'comment open'
  },
  {
    type: 'close-comment',
    regex: /(-->)/g,
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
    type: 'value',
    regex: /=\s*("[^"]*"|'[^']*'|[^\s"']*)/g,
    class: 'value'
  },
  {
    type: 'attribute',
    regex: /\s([^\s=/><"]+)/g,
    class: 'attribute'
  },
  {
    type: 'delimiter',
    regex: /(<\/|<|>|\/>|=)/g,
    class: 'delimiter'
  }
];

class HtmlHighlighter {
  constructor() {
    this.lexer = new Lexer(patterns);
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
