class Language {
  constructor(options) {
    this.options = options;

    this.init();
  }

  get name() {
    return this.options.name;
  }

  get parser() {
    return this.options.parser;
  }

  get prettier() {
    return this.options.prettier;
  }

  get lexer() {
    return this.options.lexer;
  }

  init() {
    const global = Language.getGlobal();

    if (global) {
      global._prettymeLanguages[this.name] = this;
    }
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
