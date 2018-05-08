if (typeof window !== 'undefined') {
  require('../sass/languages/html.scss');
}

const Language = require('../lexers/language');
const Highlighter = require('../lexers/highlighter');

const config = {
  comments: [{
    type: 'comment',
    regex: /(<![ \r\n\t]*(--([^-]|[\r\n]|-[^-])*--[ \r\n\t]*)>|<![ \r\n\t]*(--([^-]|[\r\n]|-[^-])*))/g,
    class: ['comment']
  }],
  patterns: [
    {
      type: 'in-angle',
      regex: /(<[^>]*>)/g,
      class: ['in-angle'],
      accumulative: true
    },
    {
      type: 'tag',
      regex: /<([^\s>/!]+)/g,
      class: ['tag', 'open']
    },
    {
      type: 'close',
      regex: /<\/([^\s>/!]+)>?/g,
      class: ['tag', 'close']
    },
    {
      type: 'value',
      regex: /=\s*("[^"<>]*"|"[^\n\r<>]*[\n\r<>]|'[^'<>]*'|'[^\n\r<>]*[\n\r<>]|[^\s>]+)/g,
      class: ['value']
    },
    {
      type: 'attribute',
      regex: /\s([^\s=/><"]+)/g,
      class: ['attribute']
    },
    {
      type: 'delimiter',
      regex: /(<\/|<|>|\/>|=)/g,
      class: ['delimiter']
    }
  ]
};

class HtmlLanguage extends Language {
  constructor() {
    super({
      name: 'html',
      lexer: new Highlighter(config)
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new HtmlLanguage();
}
