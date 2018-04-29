'use strict';

const Highlighter = require('./_highlighter');

const config = {
  comments: [{
    type: 'comment',
    regex: /(<![ \r\n\t]*(--([^-]|[\r\n]|-[^-])*--[ \r\n\t]*)>)/g,
    class: ['comment']
  }],
  patterns: [
    {
      type: 'in-angle',
      regex: /(<[^>]*>)/g,
      class: ['in-angle'],
      accumulative: true
    },
    {
      type: 'tag',
      regex: /<([^\s>/!]+)/g,
      class: ['tag', 'open']
    },
    {
      type: 'close',
      regex: /<\/([^\s>/!]+)>/g,
      class: ['tag', 'close']
    },
    {
      type: 'value',
      regex: /=\s*("[^"<>]*"|"[^\n\r<>]*[\n\r<>]|'[^'<>]*'|'[^\n\r<>]*[\n\r<>])/g,
      class: ['value']
    },
    {
      type: 'attribute',
      regex: /\s([^\s=/><"]+)/g,
      class: ['attribute']
    },
    {
      type: 'delimiter',
      regex: /(<\/|<|>|\/>|=)/g,
      class: ['delimiter']
    }
  ]
};

if (typeof module !== 'undefined') {
  module.exports = new Highlighter(config);
}
