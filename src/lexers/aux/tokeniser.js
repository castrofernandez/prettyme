'use strict';

class Tokeniser {
  constructor(options) {
    this.options = options;
    this.getElements();
  }

  getElements() {
    if (!this.content || this.content.trim() === '') {
      this.elements = [];
    }

    const elements = new Token({
      content: this.content,
      patterns: this.patterns,
      index: 0
    }).elements;

    elements.sort((a, b) => { return a.index - b.index; });

    this.elements = elements;
  }

  get content() {
    return this.options.content;
  }

  get patterns() {
    return this.options.patterns;
  }
}

class Token {
  constructor(options) {
    this.options = options;
    this.elements = [];

    if (!this.empty) {
      this.applyPatterns(this.patterns);
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
    return this.options.className;
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

  applyPatterns(patterns) {
    if (patterns.length === 0) {
      return;
    }

    const pattern = patterns[0];
    const otherPatterns = patterns.slice(1);
    const type = pattern.type;
    const regex = pattern.regex;
    const accumulative = pattern.accumulative;
    const className = [this.className, pattern.class].join(' ').trim();
    let matches = regex.exec(this.content);
    let value;
    let index;
    let length;
    let previousIndex = 0;

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

      if (accumulative) {
        this.processPart({
          content: value,
          patterns: otherPatterns,
          index: this.index + index,
          className: className
        });
      } else {
        this.elements.push(new Token({
          type: type,
          value: value,
          index: this.index + index,
          length: length,
          className: className
        }));
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
    const content = options.content.trim();

    if (content === '') {
      return;
    }

    this.elements = this.elements.concat(new Token(options).elements);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Tokeniser;
}
