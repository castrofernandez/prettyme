if (typeof window !== 'undefined') {
  require('../sass/json.scss');
}

const Language = require('../utils/language');
const jsonLexer = require('../lexers/json');

class JsonLanguage extends Language {
  constructor() {
    super({
      name: 'json',
      lexer: jsonLexer
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new JsonLanguage();
}
