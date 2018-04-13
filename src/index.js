'use strict';

// https://pegjs.org/documentation

const htmlParse = require('./grammars/html');
const cssParse = require('./grammars/css');
const htmlPrettier = require('./prettiers/html');
const cssPrettier = require('./prettiers/css');

var prettyme = (function() {
  const languages = ['html', 'css'];
  let parser = htmlParse.parse;
  let prettier = null;
  let selector = '.prettyme';

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
    if (!options) {
      return;
    }

    if (options.language) {
      checkLanguage(options.language);
      getParser(options.language);
      getPrettier(options.language);
    } else {
      if (options.parser) {
        parser = options.parser;
      }

      if (options.prettier) {
        prettier = options.prettier;
      }
    }

    if (options.selector) {
      selector = options.selector;
    }
  }

  function getParser(language) {
    parser = language === 'html' ? htmlParse.parse : cssParse.parse;
  }

  function getPrettier(language) {
    prettier = language === 'html' ? htmlPrettier : cssPrettier;
  }

  function checkLanguage(language) {
    if (!languages.includes(language)) {
      throw new Error(`Invalid language "${language}". Valid languages are: ${languages.join(', ')}`);
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
