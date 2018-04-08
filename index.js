'use strict';

// https://pegjs.org/documentation

const htmlPrettier = require('./prettiers/html');

var prettyme = (function() {
  return {
    parse: htmlPrettier.parse
  };
})();

if (typeof module !== 'undefined') {
  module.exports = prettyme;
}