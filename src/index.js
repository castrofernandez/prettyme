'use strict';

// https://pegjs.org/documentation

const Formatter = require('./formatter');
const Language = require('./languages/_language');

const defaultOptions = {
  compilation: true,
  language: null,
  selector: '.prettyme'
};

class Prettyme {
  constructor() {
    this.options = null;
  }

  get language() {
    return this.options.language;
  }

  get parser() {
    return this.languageConfig ? this.languageConfig.parser : null;
  }

  get prettier() {
    return this.languageConfig ? this.languageConfig.prettier : null;
  }

  get lexer() {
    return this.languageConfig ? this.languageConfig.lexer : null;
  }

  get languageConfig() {
    return Language.get(this.language);
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
    this.checkLanguage();

    return this.parser(code);
  }

  format(code, customOptions) {
    this.setOptions(customOptions);

    this.checkLanguage();
    return this.prettier.format(this.parser, code);
  }

  highlight(code, customOptions) {
    this.setOptions(customOptions);
    this.checkLanguage();

    return new Formatter({
      code: code,
      tokens: this.lexer.lex(code)
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
      this.checkLanguage();
    }
  }

  checkLanguage() {
    if (!this.languageConfig) {
      throw new Error(`Invalid language "${this.language}". Loaded languages are: ${Language.languages.join(', ')}`);
    }
  }
};

if (typeof module !== 'undefined') {
  module.exports = new Prettyme();
}
