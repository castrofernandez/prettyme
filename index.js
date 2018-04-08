'use strict';

// https://pegjs.org/documentation

const htmlPrettier = require('./prettiers/html');

var prettyme = (function() {
  var parser = htmlPrettier;

  function init(options) {
    parser = options.parser;
  }

  function parse(code) {
    return parser.parse(code);
  }

  function format(code) {
    return parser.format(code);
  }

  return {
    init: init,
    parse: parse,
    format: format
  };
})();

if (typeof module !== 'undefined') {
  module.exports = prettyme;
}