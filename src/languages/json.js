if (typeof window !== 'undefined') {
  require('../sass/languages/json.scss');
}

const Language = require('../lexers/language');
const Highlighter = require('../lexers/highlighter');
const Tokens = require('../lexers/tokens');

const config = {
  comments: null,
  patterns: [
    Tokens.null,
    Tokens.false,
    Tokens.true,
    {
      type: 'property',
      regex: /[{,][\s\n\r\t]*("[^"\n\n]*"?)/g,
      class: ['property', 'string']
    },
    Tokens.doubleString,
    Tokens.floating,
    {
      type: 'delimiter',
      regex: /({|}|\[|\]|:|,)/g,
      class: ['delimiter']
    }
  ]
};

class JsonLanguage extends Language {
  constructor() {
    super({
      name: 'json',
      lexer: new Highlighter(config)
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new JsonLanguage();
}
