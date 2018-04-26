if (typeof window !== 'undefined') {
  require('../sass/html.scss');
}

const Language = require('./_language');

const htmlParse = require('../parsers/html');
const htmlPrettier = require('../prettiers/html');
const htmlLexer = require('../lexers/html');

class HTML extends Language {
  constructor() {
    super({
      name: 'html',
      parser: htmlParse.parse,
      prettier: htmlPrettier,
      lexer: htmlLexer
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new HTML();
}
