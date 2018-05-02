'use strict';

const Tokens = {
  null: {
    type: 'null',
    regex: /(null)/g,
    class: ['null']
  },
  false: {
    type: 'false',
    regex: /(false)/g,
    class: ['false', 'boolean']
  },
  true: {
    type: 'true',
    regex: /(true)/g,
    class: ['true', 'boolean']
  },
  singleString: {
    type: 'string',
    regex: /('[^'\n\n]*'?)/g,
    class: ['string', 'single']
  },
  doubleString: {
    type: 'string',
    regex: /("[^"\n\n]*"?)/g,
    class: ['string', 'double']
  },
  floating: {
    type: 'floating',
    regex: /\W+(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)/g,
    class: ['number', 'floating']
  },
  integer: {
    type: 'integer',
    regex: /\W+(-?(0|[1-9])[0-9]*)/g,
    class: ['number', 'integer']
  },
  unixComment: {
    type: 'comment',
    regex: /(#(.*?)*)/g,
    class: ['comment', 'unix']
  },
  singleComment: {
    type: 'comment',
    regex: /(\/\/(.*?)*)/g,
    class: ['comment', 'single']
  },
  multilineComment: {
    type: 'comment',
    regex: /(\/\*((?!\*\/).|\n)+\*\/)/g,
    class: ['comment', 'multiline']
  },
  functionCall: {
    type: 'function',
    regex: /([$_a-zA-Z0-9]+)\s*\(/g,
    class: ['function'],
    accumulative: true
  }
};

if (typeof module !== 'undefined') {
  module.exports = Tokens;
}
