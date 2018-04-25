'use strict';

require('./sass/html.scss');
require('./sass/css.scss');

// https://pegjs.org/documentation

const htmlParse = require('./parsers/html');
const cssParse = require('./parsers/css');
const htmlPrettier = require('./prettiers/html');
const cssPrettier = require('./prettiers/css');
const htmlHighlighter = require('./lexers/html');
const cssHighlighter = require('./lexers/css');

const defaultOptions = {
  compilation: true,
  parser: htmlParse.parse,
  prettier: null,
  highlighter: null,
  selector: '.prettyme'
};

var prettyme = (function() {
  const languages = ['html', 'css'];
  let options;

  function init(customOptions) {
    options = null;
    setOptions(customOptions);
  }

  function load(customOptions) {
    setOptions(customOptions);

    let previews = document.querySelectorAll(options.selector);
    let length = previews.length;
    let preview, i;
    let container;

    for (i = 0; i < length; i++) {
      preview = previews[i];
      container = getContainer(preview);

      container.innerHTML = options.compilation ? format(preview.innerHTML) : highlight(preview.innerHTML);
    }
  }

  function getContainer(element) {
    if (element.tagName.toLowerCase() === 'script' && element.getAttribute('type') === 'codeme') {
      const div = document.createElement('div');
      div.className = element.className;
      element.parentNode.insertBefore(div, element.nextSibling);

      return div;
    }

    return element;
  }

  function parse(code, customOptions) {
    setOptions(customOptions);
    checkParser();

    return options.parser(code);
  }

  function format(code, customOptions) {
    setOptions(customOptions);

    checkParser();
    checkPrettier();
    return options.prettier.format(options.parser, code);
  }

  function highlight(code, customOptions) {
    setOptions(customOptions);
    checkHighlighter(true);

    return options.highlighter.highlight(code);
  }

  function setOptions(customOptions) {
    if (!options) {
      options = Object.assign({}, defaultOptions);
    }

    for (let option in customOptions) {
      options[option] = customOptions[option];
    }

    if (customOptions && customOptions.language) {
      checkLanguage(customOptions.language);
      getParser(customOptions.language);
      getPrettier(customOptions.language);
      getHighlighter(customOptions.language);
    }
  }

  function getParser(language) {
    options.parser = language === 'html' ? htmlParse.parse : cssParse.parse;
  }

  function getPrettier(language) {
    options.prettier = language === 'html' ? htmlPrettier : cssPrettier;
  }

  function getHighlighter(language) {
    options.highlighter = language === 'html' ? htmlHighlighter : cssHighlighter;
  }

  function checkLanguage(language) {
    if (!languages.includes(language)) {
      throw new Error(`Invalid language "${language}". Valid languages are: ${languages.join(', ')}`);
    }
  }

  function checkParser() {
    if (!options.parser) {
      throw new Error('Parser has not been set.\nUse prettyme.init({ parser: <parserObj> });');
    }
  }

  function checkPrettier() {
    if (!options.prettier) {
      throw new Error('Prettier has not been set.\nUse prettyme.init({ prettier: <prettierObj> });');
    }
  }

  function checkHighlighter() {
    if (!options.highlighter) {
      throw new Error('Highlighter has not been set.\nUse prettyme.init({ highlighter: <prettierObj> });');
    }
  }

  return {
    init: init,
    load: load,
    parse: parse,
    format: format,
    highlight: highlight
  };
})();

if (typeof module !== 'undefined') {
  module.exports = prettyme;
}
