'use strict';

const Lexer = require('./aux/lexer');

const config = {
  comments: {
    type: 'comment',
    regex: /(\/\*((?!\*\/).|\n)+\*\/)/g,
    class: ['comment']
  },
  patterns: [
    {
      type: 'selector',
      regex: /([^\s\t\n\r]+)[\s\t\n\r]*{/g,
      class: ['selector']
    },
    {
      type: 'property',
      regex: /[{;][\s\n\t\r]*([a-zA-Z-]+)[\s\n\t\r]*:/g,
      class: ['property']
    },
    {
      type: 'open-bracket',
      regex: /({)/g,
      class: ['in-bracket', 'delimiter'],
      opening: true,
      relatedClass: 'in-bracket'
    },
    {
      type: 'close-bracket',
      regex: /(})/g,
      class: ['in-bracket', 'delimiter'],
      closing: true,
      relatedClass: 'in-bracket'
    },
    {
      type: 'text',
      regex: /('[^']*'|"[^"]*")/g,
      class: ['value', 'text']
    },
    {
      type: 'function',
      regex: /([a-zA-Z\-_]*)[\s\t\r\n]*\(/g,
      class: ['value', 'function']
    },
    {
      type: 'word',
      regex: /:[\s\n\t\r]*([a-zA-Z-]+)/g,
      class: ['value', 'word']
    },
    {
      type: 'color',
      regex: /(#[0-9a-fA-F]{3,6})/g,
      class: ['value', 'color']
    },
    {
      type: 'unit',
      regex: /([0-9.]*[0-9]+[a-zA-Z%]+)/g,
      class: ['value', 'unit']
    },
    {
      type: 'number',
      regex: /([0-9.]*[0-9]+)/g,
      class: ['value', 'number']
    },
    {
      type: 'value',
      regex: /:[\s\n\t\r]*([^;]*);/g,
      class: ['value']
    },
    {
      type: 'delimiter',
      regex: /(\(|\)|,|:|;|{|})/g,
      class: ['delimiter']
    }
  ]
};

class CssHighlighter {
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
  module.exports = new CssHighlighter();
}
