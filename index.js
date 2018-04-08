'use strict';

// https://pegjs.org/documentation

const htmlGrammar = require('./grammars/html');

var prettyme = (function() {
  return {
    parse: htmlGrammar.parse
  };
})();

if (typeof module !== 'undefined') {
  module.exports = prettyme;
}