'use strict';

const Limits = require('./limits');
const Token = require('./token');
const Tokens = require('../lexers/tokens');

class Tokeniser {
  constructor(options) {
    this.options = options;
    this.getElements();
  }

  get content() {
    return this.options.content;
  }

  get patterns() {
    return this.options.patterns.concat([
      Tokens.space,
      Tokens.wildcard
    ]);
  }

  get comments() {
    return this.options.comments || [];
  }

  get customOptions() {
    return this.options.custom || {};
  }

  getElements() {
    this.elements = [];

    if (!this.content || this.content.trim() === '') {
      return;
    }

    const taggedLimits = new Limits();

    const elements = new Token({
      content: this.getContentWithoutComments(),
      patterns: this.patterns,
      index: 0,
      taggedLimits: taggedLimits
    }).elements
      .concat(this.elements); // this.elements has comments from getContentWithoutComments()

    elements.sort((a, b) => { return a.index - b.index; });

    taggedLimits.addLimits();

    this.elements = elements;
  }

  getContentWithoutComments() {
    this.elements = this.getComments();

    const output = [];
    let previousIndex = 0;
    let index;
    let length;

    this.elements.forEach(comment => {
      index = comment.index;
      length = comment.length;

      output.push(this.content.slice(previousIndex, index));
      output.push('\n'.repeat(length));

      previousIndex = index + length;
    });

    output.push(this.content.slice(previousIndex));

    return output.join('');
  }

  getComments() {
    if (!this.comments) {
      return [];
    }

    return new Token({
      content: this.content,
      patterns: this.comments,
      index: 0
    }).elements;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Tokeniser;
}
