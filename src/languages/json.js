if (typeof window !== 'undefined') {
  require('../sass/html.scss');
}

const Language = require('./_language');

const jsonParse = require('../parsers/json');
const jsonPrettier = null;
const jsonLexer = null;

class JSON extends Language {
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
  module.exports = new JSON();
}
