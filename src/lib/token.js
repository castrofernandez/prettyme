'use strict';

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

  get start() {
    return this.options.start ? parseInt(this.options.start) : 0;
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

  get wrapper() {
    return this.options.wrapper;
  }

  applyPatterns() {
    if (this.patterns.length === 0) {
      return;
    }

    const initialIndex = this.index;
    const content = this.content;
    const pattern = this.patterns[0];
    const otherPatterns = this.patterns.slice(1);
    const className = this.className;

    let matches = pattern.regex.exec(this.content);
    let value;
    let index;
    let previousIndex = 0;

    while (matches) {
      value = matches[pattern.group || 1];
      index = matches.index + content.substring(matches.index).indexOf(value);

      // Before occurrences
      this.processPart({
        content: content.substring(previousIndex, index),
        patterns: otherPatterns,
        index: initialIndex + previousIndex,
        className: className
      });

      this.processOccurrence({
        pattern: pattern,
        otherPatterns: otherPatterns,
        index: initialIndex + index,
        value: value,
        className: className
      });

      previousIndex = index + value.length;
      matches = pattern.regex.exec(content);
    }

    // After occurrences
    this.processPart({
      content: content.substring(previousIndex),
      patterns: otherPatterns,
      index: initialIndex + previousIndex,
      className: className
    });
  }

  processOccurrence(options) {
    const pattern = options.pattern;
    const classNameAccum = new Set(options.className);

    pattern.class.forEach(element => { classNameAccum.add(element); });
    options.className = classNameAccum;

    if (pattern.accumulative || pattern.wrapper) {
      this.processWrapper(options);
      return;
    }

    this.generateToken({
      type: options.pattern.type,
      value: options.value,
      index: options.index,
      length: options.value.length,
      className: options.className,
      pattern: options.pattern
    });
  }

  processWrapper(options) {
    this.processPart({
      content: options.value,
      patterns: options.otherPatterns,
      index: options.pattern.wrapper ? 0 : options.index,
      start: options.pattern.wrapper ? options.index : null,
      className: options.className,
      wrapper: options.pattern.wrapper
    });
  }

  processPart(options) {
    if (options.content.trim() !== '') {
      options = Object.assign(options, {
        taggedLimits: this.taggedLimits
      });

      if (options.wrapper) {
        this.elements.push(new Token(options));
      } else {
        this.elements = this.elements.concat(new Token(options).elements);
      }
    }
  }

  generateToken(options) {
    const token = new Token(options);

    this.taggedLimits && this.taggedLimits.store(token);
    this.elements.push(token);
  }
}

if (typeof module !== 'undefined') {
  module.exports = Token;
}
