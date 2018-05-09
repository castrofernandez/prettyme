'use strict';

// https://pegjs.org/documentation

const cssme = require('cssme');
const globalStyles = require('./styles/base/prettyme');
const Language = require('./lexers/language');

const DefaultTheme = 'default';

const defaultOptions = {
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

  get lexer() {
    return this.languageConfig ? this.languageConfig.lexer : null;
  }

  get languageConfig() {
    return Language.get(this.language);
  }

  get theme() {
    return this.options.theme || 'default';
  }

  get themeName() {
    return this.isObject(this.theme) ? this.theme.name : this.theme;
  }

  get showLines() {
    return !!this.options.lines;
  }

  init(customOptions) {
    this.options = null;
    this.setOptions(customOptions);
    this.loadStyles();
  }

  load(customOptions) {
    this.setOptions(customOptions);
    this.loadStyles();

    let previews = document.querySelectorAll(this.options.selector);
    let length = previews.length;
    let preview, i;
    let container;

    for (i = 0; i < length; i++) {
      preview = previews[i];
      container = this.getContainer(preview);
      this.addTheme(container);

      container.innerHTML = this.highlight(preview.innerHTML, this.options);
    }
  }

  addTheme(container) {
    const theme = `theme-${this.themeName}`;
    const classes = new Set(container.className.split(' '));

    classes.add(theme);

    if (this.showLines) {
      classes.add('numbered');
    }

    container.className = Array.from(classes).join(' ');
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

  highlight(code, customOptions) {
    this.setOptions(customOptions);
    this.loadStyles();
    this.checkLanguage();

    return this.lexer.highlight(code, this.options);
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

  loadStyles() {
    const theme = this.getThemeSettings(this.theme);

    cssme.load(globalStyles(theme));
    this.loadLanguageStyles(theme);
  }

  loadLanguageStyles(theme) {
    this.languageConfig.loadStyles(theme);
  }

  getThemeSettings(theme = DefaultTheme) {
    return this.isObject(theme)
      ? this.formatCustomTheme(theme)
      : require(`./styles/themes/${theme}`);
  }

  getDefaultThemeSettings() {
    return this.getThemeSettings(DefaultTheme);
  }

  formatCustomTheme(theme) {
    const defaultTheme = this.getDefaultThemeSettings();
    const output = {};

    for (let key in theme) {
      output[key] = this.isObject(theme[key])
        ? Object.assign(defaultTheme[key] || {}, theme[key])
        : theme[key];
    }

    return output;
  }

  isObject(obj) {
    return obj instanceof Object;
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
