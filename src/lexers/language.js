const cssme = require('cssme');

class Language {
  constructor(options) {
    this.options = options;

    this.init();
  }

  get name() {
    return this.options.name;
  }

  get lexer() {
    return this.options.lexer;
  }

  get styles() {
    return require(`../styles/languages/${this.name}`);
  }

  init() {
    const global = Language.getGlobal();

    if (global) {
      global._prettymeLanguages[this.name] = this;
    }

    if (typeof window !== 'undefined') {
      this.loadStyles();
    }
  }

  loadStyles() {
    const theme = require('../styles/themes/default');
    const styles = this.styles(theme);

    cssme.load(styles);
  }

  static getGlobal() {
    if (typeof global !== 'undefined') {
      return Language.setGlobal(global);
    }

    if (typeof window !== 'undefined') {
      return Language.setGlobal(window);
    }

    return null;
  }

  static setGlobal(variable) {
    if (!variable._prettymeLanguages) {
      variable._prettymeLanguages = {};
    }

    return variable;
  }

  static get(name) {
    const global = this.getGlobal();

    return global ? global._prettymeLanguages[name] : null;
  }

  static get languages() {
    return global ? Object.keys(global._prettymeLanguages) : [];
  }
}

if (typeof module !== 'undefined') {
  module.exports = Language;
}
