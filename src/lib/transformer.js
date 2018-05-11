'use strict';

const Utils = require('./utils');

const contentRegex = /^([^<\n\r]+)<|>([^<\n\r]+)<|>([^<\r\n]*)|\n([^<\r\n]*)/g;

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

    return this.replaceAny(Utils.formatLines(code, options.lineWrapper));
  }

  replaceAny(code) {
    const output = [];
    let matches = contentRegex.exec(code);
    let previousIndex = 0;

    while (matches) {
      output.push(code.slice(previousIndex, matches.index));
      output.push(this.wrapperText(matches));

      previousIndex = matches.index + matches[0].length;
      matches = contentRegex.exec(code);
    }

    output.push(code.slice(previousIndex));

    return output.join('');
  }

  wrapperText(matches) {
    let group = matches[1] || matches[2] || matches[3] || matches[4];

    if (!group) {
      return matches[0];
    }

    let code = `<span class="any">${group}</span>`;

    if (matches[1] !== undefined) {
      code = `${code}<`;
    } else if (matches[2] !== undefined) {
      code = `>${code}<`;
    } else if (matches[3] !== undefined) {
      code = `>${code}`;
    } else {
      code = `\n${code}`;
    }

    return code;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Transformer;
}
