'use strict';

const Highlighter = require('./_highlighter');
const Transformer = require('./aux/transformer');

const config = {
  patterns: [
    {
      type: 'header',
      regex: /^\s{0,3}(#+)\s(.*)/gm,
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
      regex: /^(\*\s(.*))/gm,
      class: ['list', 'ul-list'],
      formatter: `<i>*</i> $2`
    },
    {
      type: 'list-asterisk-spaces',
      regex: /^(\s*)(\*\s(.*))/gm,
      class: ['list', 'ul-list'],
      formatter: `$1<i>*</i> $3`
    },
    {
      type: 'list-dash',
      regex: /^(-\s(.*))/gm,
      class: ['list', 'ul-list'],
      formatter: `<i>-</i> $2`
    },
    {
      type: 'list-dash-spaces',
      regex: /^(\s*)(-\s(.*))/gm,
      class: ['list', 'ul-list'],
      formatter: `$1<i>-</i> $3`
    },
    {
      type: 'list-number',
      regex: /^(\d+\.)\s(.*)/gm,
      class: ['list', 'ol-list'],
      formatter: `<i>$1</i> $2`
    },
    {
      type: 'list-number-spaces',
      regex: /^(\s*)(\d+\.)\s(.*)/gm,
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
      regex: /(^```)([\s\S]*)\1/gm,
      class: ['code'],
      formatter: `<i>&#96&#96&#96</i><i>$2<i>&#96&#96&#96</i>`
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
      regex: /^(\s*)&gt;(.*)/gm,
      class: ['quote'],
      formatter: `$1<i>></i>$2`
    }
  ]
};

class MarkdownHighlighter extends Highlighter {
  constructor() {
    super(null);
    this.lexer = new Transformer(config);
  }

  highlight(code) {
    return this.lexer.transform(code);
  }

  lex(code) {
    return null;
  }
}

if (typeof module !== 'undefined') {
  module.exports = new MarkdownHighlighter();
}
