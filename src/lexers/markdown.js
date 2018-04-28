'use strict';

const Lexer = require('./aux/lexer');

const config = {
  comments: null,
  patterns: [
    {
      type: 'header',
      regex: /((^|[\n\r])(#+)\s(.*))/g,
      class: ['header'],
      wrapper: true
    },
    {
      type: 'bold',
      regex: /(\*\*(\S(.+?\S)?)\*\*)/g,
      class: ['bold'],
      wrapper: true,
      group: 2,
      format: content => `**${content}**`
    },
    {
      type: 'bold',
      regex: /(__(\S(.+?\S)?)__)/g,
      class: ['bold'],
      wrapper: true,
      group: 2,
      format: content => `__${content}__`
    },
    {
      type: 'italic',
      regex: /(\*(.+?)\*)/g,
      class: ['italic'],
      wrapper: true,
      group: 2,
      format: content => `*${content}*`
    },
    {
      type: 'italic',
      regex: /(_(.+?)_)/g,
      class: ['italic'],
      wrapper: true,
      group: 2,
      format: content => `_${content}_`
    }
  ]
};

class MarkdownHighlighter {
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
  module.exports = new MarkdownHighlighter();
}
