if (typeof window !== 'undefined') {
  require('../sass/javascript.scss');
}

const Language = require('./_language');
const javascriptLexer = require('../lexers/javascript');

class JavaScriptLanguage extends Language {
  constructor() {
    super({
      name: 'javascript',
      lexer: javascriptLexer
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new JavaScriptLanguage();
}
