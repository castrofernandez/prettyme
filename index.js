'use strict';

// https://pegjs.org/documentation

var prettyme = (function() {
  var parser = null;
  var prettier = null;
  var selector = '.prettyme';

  function init(options) {
    setOptions(options);
  }

  function load(options) {
    setOptions(options);

    var previews = document.querySelectorAll(selector);
    var length = previews.length;
    var preview, i;

    for (i = 0; i < length; i++) {
      preview = previews[i];
      preview.innerHTML = format(preview.innerHTML);
    }
  }

  function parse(code, options) {
    setOptions(options);
    checkParser(false);

    return parser(code);
  }

  function format(code, options) {
    setOptions(options);
    checkParser(true);
    return prettier.format(parser, code);
  }

  function setOptions(options) {
    if (! options) {
      return;
    }

    if (options.parser) {
      parser = options.parser;
    }

    if (options.prettier) {
      prettier = options.prettier;
    }
    
    if (options.selector) {
      selector = options.selector;
    }
  }

  function checkParser(checkPrettier) {
    if (!parser) {
      throw new Error('Parser has not been set.\nUse prettyme.init({ parser: <parserObj> });');
    }

    if (checkPrettier && !prettier) {
      throw new Error('Prettier has not been set.\nUse prettyme.init({ prettier: <prettierObj> });');
    }
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