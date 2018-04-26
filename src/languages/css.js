require('../sass/css.scss');

const Language = require('./_language');

const cssParse = require('../parsers/css');
const cssPrettier = require('../prettiers/css');
const cssLexer = require('../lexers/css');

class CSS extends Language {
  constructor() {
    super({
      name: 'css',
      parser: cssParse.parse,
      prettier: cssPrettier,
      lexer: cssLexer
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new CSS();
}
