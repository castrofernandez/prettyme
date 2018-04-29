'use strict';

const Highlighter = require('./_highlighter');
const Tokens = require('./_tokens');

const config = {
  comments: [
    Tokens.multilineComment,
    Tokens.singleComment
  ],
  patterns: [
    Tokens.singleString,
    Tokens.doubleString,
    {
      type: 'regex',
      regex: /(\/[^/]*\/[a-z]*)/g,
      class: ['regex']
    },
    {
      type: 'template',
      regex: /(`[^`]*`)/g,
      class: ['string-template'],
      accumulative: true
    },
    {
      type: 'template-parameter',
      regex: /(\$\{[^}]*\})/g,
      class: ['string-template-parameter'],
      accumulative: true
    },
    Tokens.functionCall,
    Tokens.null,
    {
      type: 'undefined',
      regex: /(undefined)/g,
      class: ['null', 'undefined']
    },
    Tokens.false,
    Tokens.true,
    {
      type: 'binary',
      regex: /(0[bB][01]+)/g,
      class: ['number', 'binary']
    },
    {
      type: 'octal',
      regex: /(0[oO][0-7]+)/g,
      class: ['number', 'octal']
    },
    {
      type: 'hexadecimal',
      regex: /(0[xX][0-9a-fA-F]+)/g,
      class: ['number', 'hexadecimal']
    },
    Tokens.floating,
    Tokens.integer,
    {
      type: 'delimiter',
      regex: /([{}[\]();.=+\-*:/!,`])/g,
      class: ['delimiter']
    },
    {
      type: 'reserved',
      regex: /(^|\s+|[^$_a-zA-Z0-9]+)(await|break|case|catch|class|const|constructor|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|function|if|implements|import|in|instanceof|interface|let|new|private|protected|public|return|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)($|\s+|[^$_a-zA-Z0-9]+)/gm,
      group: 2,
      class: ['reserved']
    },
    {
      type: 'name',
      regex: /([$_a-zA-Z0-9]+)/g,
      class: ['name']
    }
  ]
};

if (typeof module !== 'undefined') {
  module.exports = new Highlighter(config);
}
