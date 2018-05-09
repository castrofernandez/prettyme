'use strict';

const Utils = require('./utils');

const contentRegex = /^([^<]+)<|>([^<]+)<|>([^<]*)$/g;

class Transformer {
  constructor(config) {
    this.config = config;
  }

  get patterns() {
    return this.config.patterns;
  }

  transform(code, options = {}) {
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

    return Utils.formatLines(this.replaceSpaces(code), options.lineWrapper);
  }

  replaceSpaces(code) {
    const output = [];
    let matches = contentRegex.exec(code);
    let previousIndex = 0;

    while (matches) {
      output.push(code.slice(previousIndex, matches.index));
      output.push(this.convertSpace(matches[0]));

      previousIndex = matches.index + matches[0].length;
      matches = contentRegex.exec(code);
    }

    output.push(code.slice(previousIndex));

    return output.join('');
  }

  convertSpace(code) {
    return code.replace(/ /g, '<span class="space"> </span>');
  }
}

if (typeof module !== 'undefined') {
  module.exports = Transformer;
}
