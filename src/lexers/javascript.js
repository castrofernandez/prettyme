'use strict';

const Highlighter = require('./_highlighter');

const config = {
  comments: {
    type: 'comment',
    regex: /(\/\*((?!\*\/).|\n)+\*\/|\/\/(.*?)*)/g,
    class: ['comment']
  },
  patterns: [
    {
      type: 'string',
      regex: /("[^"\n\n]*"?|'[^'\n\n]*'?)/g,
      class: ['string']
    },
    {
      type: 'function',
      regex: /([$_a-zA-Z0-9]+)\s*\(/g,
      class: ['function'],
      accumulative: true
    },
    {
      type: 'delimiter',
      regex: /([{}[\]();.=+\-*:/!,])/g,
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
