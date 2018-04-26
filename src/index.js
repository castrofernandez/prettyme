'use strict';

require('./sass/html.scss');
require('./sass/css.scss');

// https://pegjs.org/documentation

const Formatter = require('./formatter');
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

class Prettyme {
  constructor() {
    this.languages = ['html', 'css'];
    this.options = null;
  }

  init(customOptions) {
    this.options = null;
    this.setOptions(customOptions);
  }

  load(customOptions) {
    this.setOptions(customOptions);

    let previews = document.querySelectorAll(this.options.selector);
    let length = previews.length;
    let preview, i;
    let container;

    for (i = 0; i < length; i++) {
      preview = previews[i];
      container = this.getContainer(preview);

      container.innerHTML = this.options.compilation ? this.format(preview.innerHTML) : this.highlight(preview.innerHTML);
    }
  }

  getContainer(element) {
    if (element.tagName.toLowerCase() === 'script' && element.getAttribute('type') === 'codeme') {
      const div = document.createElement('div');
      div.className = element.className;
      element.parentNode.insertBefore(div, element.nextSibling);

      return div;
    }

    return element;
  }

  parse(code, customOptions) {
    this.setOptions(customOptions);
    this.checkParser();

    return this.options.parser(code);
  }

  format(code, customOptions) {
    this.setOptions(customOptions);

    this.checkParser();
    this.checkPrettier();
    return this.options.prettier.format(this.options.parser, code);
  }

  highlight(code, customOptions) {
    this.setOptions(customOptions);
    this.checkHighlighter(true);

    return new Formatter({
      code: code,
      tokens: this.options.highlighter.lex(code)
    }).formatLines();
  }

  setOptions(customOptions) {
    if (!this.options) {
      this.options = Object.assign({}, defaultOptions);
    }

    for (let option in customOptions) {
      this.options[option] = customOptions[option];
    }

    if (customOptions && customOptions.language) {
      this.checkLanguage(customOptions.language);
      this.getParser(customOptions.language);
      this.getPrettier(customOptions.language);
      this.getHighlighter(customOptions.language);
    }
  }

  getParser(language) {
    this.options.parser = language === 'html' ? htmlParse.parse : cssParse.parse;
  }

  getPrettier(language) {
    this.options.prettier = language === 'html' ? htmlPrettier : cssPrettier;
  }

  getHighlighter(language) {
    this.options.highlighter = language === 'html' ? htmlHighlighter : cssHighlighter;
  }

  checkLanguage(language) {
    if (!this.languages.includes(language)) {
      throw new Error(`Invalid language "${language}". Valid languages are: ${this.languages.join(', ')}`);
    }
  }

  checkParser() {
    if (!this.options.parser) {
      throw new Error('Parser has not been set.\nUse prettyme.init({ parser: <parserObj> });');
    }
  }

  checkPrettier() {
    if (!this.options.prettier) {
      throw new Error('Prettier has not been set.\nUse prettyme.init({ prettier: <prettierObj> });');
    }
  }

  checkHighlighter() {
    if (!this.options.highlighter) {
      throw new Error('Highlighter has not been set.\nUse prettyme.init({ highlighter: <prettierObj> });');
    }
  }
};

if (typeof module !== 'undefined') {
  module.exports = new Prettyme();
}
