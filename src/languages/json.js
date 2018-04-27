if (typeof window !== 'undefined') {
  require('../sass/json.scss');
}

const Language = require('./_language');

const jsonParse = require('../parsers/json');
const jsonPrettier = require('../prettiers/json');
const jsonLexer = require('../lexers/json');

class JsonLanguage extends Language {
  constructor() {
    super({
      name: 'json',
      parser: jsonParse.parse,
      prettier: jsonPrettier,
      lexer: jsonLexer
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new JsonLanguage();
}
