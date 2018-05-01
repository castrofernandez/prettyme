if (typeof window !== 'undefined') {
  require('../sass/markdown.scss');
}

const Language = require('../utils/language');
const markdownLexer = require('../lexers/markdown');

class MarkdownLanguage extends Language {
  constructor() {
    super({
      name: 'markdown',
      lexer: markdownLexer
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new MarkdownLanguage();
}
