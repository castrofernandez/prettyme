'use strict';

const Lexer = require('./aux/lexer');

const patterns = [
  // {
  //   type: 'comment',
  //   regex: /(\/\*((?!\*\/).|\n)+\*\/)/g,
  //   class: ['comment']
  // },
  {
    type: 'selector',
    regex: /[\s\t\n\r]*([^{]+){[^}]*}/g,
    class: ['selector'],
    accumulative: true
  },
  {
    type: 'open-value',
    regex: /(:)/g,
    class: ['in-value', 'delimiter'],
    opening: true,
    relatedClass: 'in-value'
  },
  {
    type: 'close-value',
    regex: /(;)/g,
    class: ['in-value', 'delimiter'],
    closing: true,
    relatedClass: 'in-value'
  },
  {
    type: 'open-comment',
    regex: /(\/\*)/g,
    class: ['comment', 'open-comment'],
    opening: true,
    relatedClass: 'comment'
  },
  {
    type: 'close-comment',
    regex: /(\*\/)/g,
    class: ['comment', 'close-comment'],
    closing: true,
    relatedClass: 'comment'
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
    type: 'property',
    regex: /([a-zA-Z-]+)[^:;{]*:/g,
    class: ['property']
  },
  {
    type: 'in-angles',
    regex: /({[^}]*})/g,
    class: ['in-angles'],
    accumulative: true
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
    type: 'color',
    regex: /(#[0-9a-fA-F]{3,6})/g,
    class: ['value', 'color']
  },
  {
    type: 'unit',
    regex: /([0-9.]+[a-zA-Z%]+)/g,
    class: ['value', 'unit']
  },
  {
    type: 'number',
    regex: /([0-9.]+)/g,
    class: ['value', 'number']
  },
  {
    type: 'value',
    regex: /:[\s\n\t\r]*([^;]*);/g,
    class: ['value']
  },
  {
    type: 'delimiter',
    regex: /(\(|\)|,|:|;)/g,
    class: ['delimiter']
  },
  {
    type: 'word',
    regex: /([^\s\t\r\n]+)/g,
    class: ['word']
  }
];

class CssHighlighter {
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
  module.exports = new CssHighlighter();
}
