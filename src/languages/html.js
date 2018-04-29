if (typeof window !== 'undefined') {
  require('../sass/html.scss');
}

const Language = require('./_language');
const htmlLexer = require('../lexers/html');

class HtmlLanguage extends Language {
  constructor() {
    super({
      name: 'html',
      lexer: htmlLexer
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new HtmlLanguage();
}
