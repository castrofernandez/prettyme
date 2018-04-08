'use strict';

// https://pegjs.org/documentation

const htmlPrettier = require('./prettiers/html');

var prettyme = (function() {
  var parser = htmlPrettier;
  var selector = '.prettyme';

  function init(options) {
    options = options || {};

    if (options.parser) {
      parser = options.parser;
    }
    
    if (options.selector) {
      selector = options.selector;
    }
  }

  function load() {
    var previews = document.querySelectorAll(selector);
    var length = previews.length;
    var preview, i;

    for (i = 0; i < length; i++) {
      preview = previews[i];
      preview.innerHTML = format(preview.innerHTML);
    }
  }

  function parse(code) {
    return parser.parse(code);
  }

  function format(code) {
    return parser.format(code);
  }

  return {
    init: init,
    load: load,
    parse: parse,
    format: format
  };
})();

if (typeof module !== 'undefined') {
  module.exports = prettyme;
}