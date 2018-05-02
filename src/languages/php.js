if (typeof window !== 'undefined') {
  require('../sass/php.scss');
}

const Language = require('../lexers/language');
const Highlighter = require('../lexers/highlighter');
const Tokens = require('../lexers/tokens');

const config = {
  comments: [
    Tokens.multilineComment,
    Tokens.unixComment,
    Tokens.singleComment
  ],
  patterns: [
    {
      type: 'tag',
      regex: /(<\?php|\?>)/g,
      class: ['tag']
    },
    Tokens.singleString,
    Tokens.doubleString,
    {
      type: 'regex',
      regex: /(\/[^/]*\/[a-z]*)/g,
      class: ['regex']
    },
    {
      type: 'template',
      regex: /(`[^`]*`)/g,
      class: ['string-template'],
      accumulative: true
    },
    {
      type: 'template-parameter',
      regex: /(\$\{[^}]*\})/g,
      class: ['string-template-parameter'],
      accumulative: true
    },
    Tokens.functionCall,
    {
      type: 'null',
      regex: /([Nn][Uu][Ll][Ll])/g,
      class: ['null']
    },
    {
      type: 'false',
      regex: /([Ff][Aa][Ll][Ss][Ee])/g,
      class: ['false', 'boolean']
    },
    {
      type: 'true',
      regex: /([Tt][Rr][Uu][Ee])/g,
      class: ['true', 'boolean']
    },
    Tokens.floating,
    Tokens.integer,
    {
      type: 'variable',
      regex: /(\$[_a-zA-Z0-9]+)/g,
      class: ['variable', 'name']
    },
    {
      type: 'delimiter',
      regex: /(\*\*|=>|->|<>|>=|<=|==|===|!=|!==|\+\+|--|&&|\|\||\.=|-=|\*=|\/=|[{}[\]();.=+\-*:/!,$%<>])/g,
      class: ['delimiter']
    },
    {
      type: 'reserved',
      regex: /(^|\s+|[^$_a-zA-Z0-9]+)(__halt_compiler()|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__CLASS__|__DIR__|__FILE__|__FUNCTION__|__LINE__|__METHOD__|__NAMESPACE__|__TRAIT__)($|\s+|[^$_a-zA-Z0-9]+)/gm,
      group: 2,
      class: ['reserved']
    },
    {
      type: 'name',
      regex: /([_a-zA-Z]+[$_a-zA-Z0-9]*)/g,
      class: ['name']
    }
  ]
};

class PhpLanguage extends Language {
  constructor() {
    super({
      name: 'php',
      lexer: new Highlighter(config)
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new PhpLanguage();
}
