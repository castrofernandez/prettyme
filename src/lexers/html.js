'use strict';

const Lexer = require('./aux/lexer');

const patterns = [
  {
    type: 'comment',
    regex: /(<!--(.|\s)*?-->)/g,
    class: 'comment'
  },
  {
    type: 'in-angles',
    regex: /(<[^>]*>)/g,
    class: 'in-angles',
    accumulative: true
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

  getTokens(code) {
    return this.lexer.getTokens(code);
  }
}

if (typeof module !== 'undefined') {
  module.exports = new HtmlHighlighter();
}
