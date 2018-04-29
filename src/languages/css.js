if (typeof window !== 'undefined') {
  require('../sass/css.scss');
}

const Language = require('./_language');
const cssLexer = require('../lexers/css');

class CssLanguage extends Language {
  constructor() {
    super({
      name: 'css',
      lexer: cssLexer
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new CssLanguage();
}
