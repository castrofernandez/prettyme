'use strict';

class Limits {
  constructor() {
    this.tokens = [];
    this.openings = {};
    this.closings = {};
  }

  store(token) {
    this.tokens.push(token);
    this.processOpening(token);
    this.processClosing(token);
  }

  processOpening(token) {
    if (!token.isOpening) {
      return;
    }

    (this.getContainer(this.openings, token.relatedClass)).push(token.index);
  }

  processClosing(token) {
    if (!token.isClosing) {
      return;
    }

    (this.getContainer(this.closings, token.relatedClass)).push(token.index);
  }

  getContainer(object, className) {
    if (!object[className]) {
      object[className] = [];
    }

    return object[className];
  }

  addLimits() {
    let key;

    for (key in this.openings) {
      this.processKeyLimits(key);
    }
  }

  processKeyLimits(key) {
    const openings = this.openings[key];
    const closings = this.closings[key] || [];
    let stop;
    let previousStop = -1;

    openings.forEach(start => {
      if (start > previousStop) {
        stop = this.getStop(closings, start);
        this.addClass(key, [start, stop]);
        previousStop = stop;
      }
    });
  }

  getStop(closings, start) {
    const length = closings.length;
    let i = 0;
    let stop = -1;
    let value;

    for (i = 0; i < length; i++) {
      value = closings[i];

      if (value > start) {
        stop = value;
        closings.splice(i, 1);
        break;
      }
    }

    return stop;
  }

  addClass(className, limits) {
    this.getRangeTokens(...limits).forEach(token => {
      token.className.add(className);
    });
  }

  getRangeTokens(start, stop) {
    return this.tokens.filter(token => {
      return token.index >= start && (stop === -1 || token.index <= stop);
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = Limits;
}
