'use strict';

const Highlighter = require('./_highlighter');
const Tokens = require('./_tokens');

const config = {
  comments: null,
  patterns: [
    Tokens.null,
    Tokens.false,
    Tokens.true,
    {
      type: 'property',
      regex: /[{,][\s\n\r\t]*("[^"\n\n]*"?)/g,
      class: ['property', 'string']
    },
    Tokens.doubleString,
    Tokens.floating,
    {
      type: 'delimiter',
      regex: /({|}|[|]|:|,)/g,
      class: ['delimiter']
    }
  ]
};

if (typeof module !== 'undefined') {
  module.exports = new Highlighter(config);
}
