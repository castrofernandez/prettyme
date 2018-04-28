'use strict';

const Utils = require('../../utils/utils');

class Transformer {
  constructor(config) {
    this.config = config;
  }

  get patterns() {
    return this.config.patterns;
  }

  transform(code) {
    code = Utils.escape(code);
    let group;
    let className;
    let formatter;

    this.patterns.forEach(pattern => {
      group = pattern.group || 1;
      className = ['token-wrapper'].concat(pattern.class).join(' ');
      formatter = pattern.formatter || `$${group}`;

      if (pattern.repl) {
        code = code.replace(pattern.regex, pattern.repl);
      } else {
        code = code.replace(pattern.regex, `<div class="${className}">${formatter}</div>`);
      }
    });

    return Utils.formatLines(code);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Transformer;
}
