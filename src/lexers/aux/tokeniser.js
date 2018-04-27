'use strict';

const Limits = require('./limits');

class Tokeniser {
  constructor(options) {
    this.options = options;
    this.getElements();
  }

  get content() {
    return this.options.content;
  }

  get patterns() {
    return this.options.patterns;
  }

  get comments() {
    return this.options.comments;
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
      output.push(' '.repeat(length));

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
      patterns: [this.comments],
      index: 0
    }).elements;
  }
}

class Token {
  constructor(options) {
    this.options = options;
    this.elements = [];

    if (!this.empty) {
      this.applyPatterns();
    }
  }

  get type() {
    return this.options.type;
  }

  get value() {
    return this.options.value;
  }

  get index() {
    return parseInt(this.options.index);
  }

  get className() {
    return this.options.className || new Set();
  }

  get length() {
    return this.options.length;
  }

  get content() {
    return this.options.content;
  }

  get patterns() {
    return this.options.patterns || [];
  }

  get empty() {
    return !this.content || this.content.trim() === '';
  }

  get taggedLimits() {
    return this.options.taggedLimits;
  }

  get relatedClass() {
    return this.options.pattern ? this.options.pattern.relatedClass : null;
  }

  get isOpening() {
    return this.options.pattern && this.options.pattern.opening;
  }

  get isClosing() {
    return this.options.pattern && this.options.pattern.closing;
  }

  applyPatterns() {
    if (this.patterns.length === 0) {
      return;
    }

    const pattern = this.patterns[0];
    const otherPatterns = this.patterns.slice(1);
    const regex = pattern.regex;
    const className = new Set(this.className);
    let matches = regex.exec(this.content);
    let value;
    let index;
    let length;
    let previousIndex = 0;

    pattern.class.forEach(element => { className.add(element); });

    while (matches) {
      value = matches[1];
      index = matches.index + this.content.substring(matches.index).indexOf(value);
      length = value.length;

      this.processPart({
        content: this.content.substring(previousIndex, index),
        patterns: otherPatterns,
        index: this.index + previousIndex,
        className: this.className
      });

      if (pattern.accumulative) {
        this.processPart({
          content: value,
          patterns: otherPatterns,
          index: this.index + index,
          className: className
        });
      } else {
        this.generateToken({
          type: pattern.type,
          value: value,
          index: this.index + index,
          length: length,
          className: className,
          pattern: pattern
        });
      }

      previousIndex = index + length;
      matches = regex.exec(this.content);
    }

    this.processPart({
      content: this.content.substring(previousIndex),
      patterns: otherPatterns,
      index: this.index + previousIndex,
      className: this.className
    });
  }

  processPart(options) {
    if (options.content.trim() !== '') {
      options = Object.assign(options, {
        taggedLimits: this.taggedLimits
      });

      this.elements = this.elements.concat(new Token(options).elements);
    }
  }

  generateToken(options) {
    const token = new Token(options);

    this.taggedLimits && this.taggedLimits.store(token);
    this.elements.push(token);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Tokeniser;
}
