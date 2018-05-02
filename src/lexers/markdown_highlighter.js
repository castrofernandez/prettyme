'use strict';

const Highlighter = require('./highlighter');
const Transformer = require('../lib/transformer');

class MarkdownHighlighter extends Highlighter {
  constructor(config) {
    super(null);
    this.lexer = new Transformer(config);
  }

  highlight(code, options = {}) {
    return this.lexer.transform(code, options);
  }

  lex(code, options = {}) {
    return null;
  }
}

if (typeof module !== 'undefined') {
  module.exports = MarkdownHighlighter;
}
