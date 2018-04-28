'use strict';

const Highlighter = require('./_highlighter');

const config = {
  comments: null,
  patterns: [
    {
      type: 'null',
      regex: /(null)/g,
      class: ['null']
    },
    {
      type: 'false',
      regex: /(false)/g,
      class: ['false', 'boolean']
    },
    {
      type: 'true',
      regex: /(true)/g,
      class: ['true', 'boolean']
    },
    {
      type: 'property',
      regex: /[{,][\s\n\r\t]*("[^"\n\n]*"?)/g,
      class: ['property', 'string']
    },
    {
      type: 'string',
      regex: /("[^"\n\n]*"?)/g,
      class: ['string']
    },
    {
      type: 'number',
      regex: /(-?[-+eE0-9.]+)/g,
      class: ['number']
    },
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
