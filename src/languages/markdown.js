const Utils = require('../lib/utils');
const Language = require('../lexers/language');
const MarkdownHighlighter = require('../lexers/markdown_highlighter');

const config = {
  patterns: [
    {
      type: 'header',
      regex: /^\s{0,3}(#+) (.*)/gm,
      class: ['header'],
      wrapper: true,
      formatter: `<i class="a">$1</i> $2`
    },
    {
      type: 'bold-asterisk',
      regex: /(\*\*(\S(.+?\S)?)\*\*)/g,
      class: ['bold'],
      formatter: `<i>&lowast;&lowast;</i>$2<i>&lowast;&lowast;</i>`
    },
    {
      type: 'bold-underscore',
      regex: /(__(\S(.+?\S)?)__)/g,
      class: ['bold'],
      formatter: `<i>&#95;&#95;</i>$2<i>&#95;&#95;</i>`
    },
    {
      type: 'italic-asterisk',
      regex: /(\*(.+?)\*)/g,
      class: ['italic'],
      formatter: `<i>&lowast;</i>$2<i>&lowast;</i>`
    },
    {
      type: 'italic-underscore',
      regex: /(_(.+?)_)/g,
      class: ['italic'],
      formatter: `<i>&#95;</i>$2<i>&#95;</i>`
    },
    {
      type: 'list-asterisk',
      regex: /^(\* (.*))/gm,
      class: ['list', 'ul-list'],
      formatter: `<i>*</i> $2`
    },
    {
      type: 'list-asterisk-spaces',
      regex: /^( *)(\* (.*))/gm,
      class: ['list', 'ul-list'],
      formatter: `$1<i>*</i> $3`
    },
    {
      type: 'list-dash',
      regex: /^(- (.*))/gm,
      class: ['list', 'ul-list'],
      formatter: `<i>-</i> $2`
    },
    {
      type: 'list-dash-spaces',
      regex: /^( *)(- (.*))/gm,
      class: ['list', 'ul-list'],
      formatter: `$1<i>-</i> $3`
    },
    {
      type: 'list-number',
      regex: /^(\d+\.) (.*)/gm,
      class: ['list', 'ol-list'],
      formatter: `<i>$1</i> $2`
    },
    {
      type: 'list-number-spaces',
      regex: /^( *)(\d+\.) (.*)/gm,
      class: ['list', 'ol-list'],
      formatter: `$1<i>$2</i> $3`
    },
    {
      type: 'link',
      regex: /!\[([^\]]*)\]\(([^)]*)\)/g,
      class: ['link'],
      formatter: `<i>!</i><i class="b">[</i>$1<i class="b">]</i><i class="p">(</i><span class="u">$2</span><i class="p">)</i>`
    },
    {
      type: 'code',
      regex: /^```([a-z]*)\n([\s\S]*?)\n```$/gm,
      class: ['code'],
      repl: (match, $1, $2) => {
        const start = '<div class="code">';
        const end = '</div>';
        const exp = `<i>&#96&#96&#96</i><span class="language">${$1}</span>\n${$2}\n<i>&#96&#96&#96</i>`;
        const code = Utils.replaceAll(exp, '\n', `${end}\n${start}`);

        return `${start}${code}${end}`;
      }
    },
    {
      type: 'code-inline',
      regex: /`(.*?)`/g,
      class: ['code-inline'],
      formatter: `<i>&#96</i>$1<i>&#96</i>`
    },
    {
      type: 'quote',
      regex: /^&gt;(.*)/gm,
      class: ['quote'],
      formatter: `<i>></i>$1`
    },
    {
      type: 'quote-spaces',
      regex: /^( *)&gt;(.*)/gm,
      class: ['quote'],
      formatter: `$1<i>></i>$2`
    }
  ]
};

class MarkdownLanguage extends Language {
  constructor() {
    super({
      name: 'markdown',
      lexer: new MarkdownHighlighter(config)
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = new MarkdownLanguage();
}
