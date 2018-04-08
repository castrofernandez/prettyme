'use strict';

// https://pegjs.org/documentation

const markupGrammar = require('./grammars/markup');

var prettyme = (function() {
  return {
    parse: markupGrammar.parse
  };
})();

if (typeof module !== 'undefined') {
  module.exports = prettyme;
}