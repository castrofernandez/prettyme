if (typeof window !== 'undefined') {
  require('../sass/markdown.scss');
}

const Language = require('./_language');

// const markdownParse = null;
const markdownPrettier = null;
const markdownLexer = require('../lexers/markdown');

class MarkdownLanguage extends Language {
  constructor() {
    super({
      name: 'markdown',
      parser: null, // markdownParse.parse,
      prettier: markdownPrettier,
      lexer: markdownLexer
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new MarkdownLanguage();
}
