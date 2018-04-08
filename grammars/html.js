/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { Content: peg$parseContent },
      peg$startRuleFunction  = peg$parseContent,

      peg$c0 = function(emptyTag) {
          return {
            tag: emptyTag.tag,
            type: 'empty',
            attributes: emptyTag.attributes
          }  
        },
      peg$c1 = function(startTag) {
          return {
            tag: startTag.tag,
            type: 'open',
            attributes: startTag.attributes
          }
        },
      peg$c2 = function(closeTag) {
          return {
            tag: closeTag,
            type: 'close'
          };
        },
      peg$c3 = "<",
      peg$c4 = peg$literalExpectation("<", false),
      peg$c5 = ">",
      peg$c6 = peg$literalExpectation(">", false),
      peg$c7 = function(name, attributes) {
          return {
            tag: name,
            attributes: attributes
          }; 
        },
      peg$c8 = "/>",
      peg$c9 = peg$literalExpectation("/>", false),
      peg$c10 = function(name, attributes) { 
          return {
            tag: name,
            attributes: attributes
          }; 
        },
      peg$c11 = function(name, attributes) {
          return {
            tag: name,
            attributes: attributes
          }; 
       },
      peg$c12 = function(name, value) { 
          return {
            name: name,
            value: value
          };
      },
      peg$c13 = "=",
      peg$c14 = peg$literalExpectation("=", false),
      peg$c15 = "\"",
      peg$c16 = peg$literalExpectation("\"", false),
      peg$c17 = function(value) { return value; },
      peg$c18 = "</",
      peg$c19 = peg$literalExpectation("</", false),
      peg$c20 = function(name) { return name; },
      peg$c21 = "area",
      peg$c22 = peg$literalExpectation("area", false),
      peg$c23 = "base",
      peg$c24 = peg$literalExpectation("base", false),
      peg$c25 = "br",
      peg$c26 = peg$literalExpectation("br", false),
      peg$c27 = "col",
      peg$c28 = peg$literalExpectation("col", false),
      peg$c29 = "embed",
      peg$c30 = peg$literalExpectation("embed", false),
      peg$c31 = "hr",
      peg$c32 = peg$literalExpectation("hr", false),
      peg$c33 = "img",
      peg$c34 = peg$literalExpectation("img", false),
      peg$c35 = "input",
      peg$c36 = peg$literalExpectation("input", false),
      peg$c37 = "keygen",
      peg$c38 = peg$literalExpectation("keygen", false),
      peg$c39 = "link",
      peg$c40 = peg$literalExpectation("link", false),
      peg$c41 = "meta",
      peg$c42 = peg$literalExpectation("meta", false),
      peg$c43 = "param",
      peg$c44 = peg$literalExpectation("param", false),
      peg$c45 = "source",
      peg$c46 = peg$literalExpectation("source", false),
      peg$c47 = "track",
      peg$c48 = peg$literalExpectation("track", false),
      peg$c49 = "wbr",
      peg$c50 = peg$literalExpectation("wbr", false),
      peg$c51 = /^[ \t\r\n]/,
      peg$c52 = peg$classExpectation([" ", "\t", "\r", "\n"], false, false),
      peg$c53 = /^[a-zA-Z\-]/,
      peg$c54 = peg$classExpectation([["a", "z"], ["A", "Z"], "-"], false, false),
      peg$c55 = function(chars) { return chars.join(''); },
      peg$c56 = /^[^<]/,
      peg$c57 = peg$classExpectation(["<"], true, false),
      peg$c58 = function(chars) {
        var value = chars.join('');

        if (value.trim() === '') {
          return null;
        }

        return {
          type: 'text',
          value: value
        };
      },
      peg$c59 = /^[^"]/,
      peg$c60 = peg$classExpectation(["\""], true, false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseContent() {
    var s0, s1;

    s0 = [];
    s1 = peg$parseTag();
    if (s1 === peg$FAILED) {
      s1 = peg$parsetext();
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parseTag();
      if (s1 === peg$FAILED) {
        s1 = peg$parsetext();
      }
    }

    return s0;
  }

  function peg$parseTag() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseEmptyTag();
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c0(s1);
    }
    s0 = s1;
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = peg$parseStartTag();
      if (s1 !== peg$FAILED) {
        peg$savedPos = s0;
        s1 = peg$c1(s1);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$parseCloseTag();
        if (s1 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c2(s1);
        }
        s0 = s1;
      }
    }

    return s0;
  }

  function peg$parseEmptyTag() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 60) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewhitespace();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewhitespace();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseemptyTagName();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseAttribute();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseAttribute();
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parsewhitespace();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parsewhitespace();
            }
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 62) {
                s6 = peg$c5;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c6); }
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c7(s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 60) {
        s1 = peg$c3;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c4); }
      }
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parsewhitespace();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parsewhitespace();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parsetagName();
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parsewhitespace();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parsewhitespace();
            }
            if (s4 !== peg$FAILED) {
              s5 = [];
              s6 = peg$parseAttribute();
              while (s6 !== peg$FAILED) {
                s5.push(s6);
                s6 = peg$parseAttribute();
              }
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parsewhitespace();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parsewhitespace();
                }
                if (s6 !== peg$FAILED) {
                  if (input.substr(peg$currPos, 2) === peg$c8) {
                    s7 = peg$c8;
                    peg$currPos += 2;
                  } else {
                    s7 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c9); }
                  }
                  if (s7 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c10(s3, s5);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseStartTag() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    if (input.charCodeAt(peg$currPos) === 60) {
      s1 = peg$c3;
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewhitespace();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewhitespace();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsetagName();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parseAttribute();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parseAttribute();
          }
          if (s4 !== peg$FAILED) {
            s5 = [];
            s6 = peg$parsewhitespace();
            while (s6 !== peg$FAILED) {
              s5.push(s6);
              s6 = peg$parsewhitespace();
            }
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 62) {
                s6 = peg$c5;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c6); }
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c11(s3, s4);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAttribute() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewhitespace();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsewhitespace();
    }
    if (s1 !== peg$FAILED) {
      s2 = peg$parsetagName();
      if (s2 !== peg$FAILED) {
        s3 = peg$parseAttributeValue();
        if (s3 === peg$FAILED) {
          s3 = null;
        }
        if (s3 !== peg$FAILED) {
          peg$savedPos = s0;
          s1 = peg$c12(s2, s3);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseAttributeValue() {
    var s0, s1, s2, s3, s4, s5, s6;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parsewhitespace();
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      s2 = peg$parsewhitespace();
    }
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 61) {
        s2 = peg$c13;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c14); }
      }
      if (s2 !== peg$FAILED) {
        s3 = [];
        s4 = peg$parsewhitespace();
        while (s4 !== peg$FAILED) {
          s3.push(s4);
          s4 = peg$parsewhitespace();
        }
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s4 = peg$c15;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c16); }
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parsequotedText();
            if (s5 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 34) {
                s6 = peg$c15;
                peg$currPos++;
              } else {
                s6 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c16); }
              }
              if (s6 !== peg$FAILED) {
                peg$savedPos = s0;
                s1 = peg$c17(s5);
                s0 = s1;
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    if (s0 === peg$FAILED) {
      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parsewhitespace();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parsewhitespace();
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 61) {
          s2 = peg$c13;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c14); }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parsewhitespace();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parsewhitespace();
          }
          if (s3 !== peg$FAILED) {
            s4 = peg$parsetagName();
            if (s4 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c17(s4);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    }

    return s0;
  }

  function peg$parseCloseTag() {
    var s0, s1, s2, s3, s4, s5;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 2) === peg$c18) {
      s1 = peg$c18;
      peg$currPos += 2;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c19); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parsewhitespace();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parsewhitespace();
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parsetagName();
        if (s3 !== peg$FAILED) {
          s4 = [];
          s5 = peg$parsewhitespace();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parsewhitespace();
          }
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 62) {
              s5 = peg$c5;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c6); }
            }
            if (s5 !== peg$FAILED) {
              peg$savedPos = s0;
              s1 = peg$c20(s3);
              s0 = s1;
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseemptyTagName() {
    var s0;

    if (input.substr(peg$currPos, 4) === peg$c21) {
      s0 = peg$c21;
      peg$currPos += 4;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c22); }
    }
    if (s0 === peg$FAILED) {
      if (input.substr(peg$currPos, 4) === peg$c23) {
        s0 = peg$c23;
        peg$currPos += 4;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c24); }
      }
      if (s0 === peg$FAILED) {
        if (input.substr(peg$currPos, 2) === peg$c25) {
          s0 = peg$c25;
          peg$currPos += 2;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c26); }
        }
        if (s0 === peg$FAILED) {
          if (input.substr(peg$currPos, 3) === peg$c27) {
            s0 = peg$c27;
            peg$currPos += 3;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c28); }
          }
          if (s0 === peg$FAILED) {
            if (input.substr(peg$currPos, 5) === peg$c29) {
              s0 = peg$c29;
              peg$currPos += 5;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c30); }
            }
            if (s0 === peg$FAILED) {
              if (input.substr(peg$currPos, 2) === peg$c31) {
                s0 = peg$c31;
                peg$currPos += 2;
              } else {
                s0 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c32); }
              }
              if (s0 === peg$FAILED) {
                if (input.substr(peg$currPos, 3) === peg$c33) {
                  s0 = peg$c33;
                  peg$currPos += 3;
                } else {
                  s0 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c34); }
                }
                if (s0 === peg$FAILED) {
                  if (input.substr(peg$currPos, 5) === peg$c35) {
                    s0 = peg$c35;
                    peg$currPos += 5;
                  } else {
                    s0 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c36); }
                  }
                  if (s0 === peg$FAILED) {
                    if (input.substr(peg$currPos, 6) === peg$c37) {
                      s0 = peg$c37;
                      peg$currPos += 6;
                    } else {
                      s0 = peg$FAILED;
                      if (peg$silentFails === 0) { peg$fail(peg$c38); }
                    }
                    if (s0 === peg$FAILED) {
                      if (input.substr(peg$currPos, 4) === peg$c39) {
                        s0 = peg$c39;
                        peg$currPos += 4;
                      } else {
                        s0 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c40); }
                      }
                      if (s0 === peg$FAILED) {
                        if (input.substr(peg$currPos, 4) === peg$c41) {
                          s0 = peg$c41;
                          peg$currPos += 4;
                        } else {
                          s0 = peg$FAILED;
                          if (peg$silentFails === 0) { peg$fail(peg$c42); }
                        }
                        if (s0 === peg$FAILED) {
                          if (input.substr(peg$currPos, 5) === peg$c43) {
                            s0 = peg$c43;
                            peg$currPos += 5;
                          } else {
                            s0 = peg$FAILED;
                            if (peg$silentFails === 0) { peg$fail(peg$c44); }
                          }
                          if (s0 === peg$FAILED) {
                            if (input.substr(peg$currPos, 6) === peg$c45) {
                              s0 = peg$c45;
                              peg$currPos += 6;
                            } else {
                              s0 = peg$FAILED;
                              if (peg$silentFails === 0) { peg$fail(peg$c46); }
                            }
                            if (s0 === peg$FAILED) {
                              if (input.substr(peg$currPos, 5) === peg$c47) {
                                s0 = peg$c47;
                                peg$currPos += 5;
                              } else {
                                s0 = peg$FAILED;
                                if (peg$silentFails === 0) { peg$fail(peg$c48); }
                              }
                              if (s0 === peg$FAILED) {
                                if (input.substr(peg$currPos, 3) === peg$c49) {
                                  s0 = peg$c49;
                                  peg$currPos += 3;
                                } else {
                                  s0 = peg$FAILED;
                                  if (peg$silentFails === 0) { peg$fail(peg$c50); }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    return s0;
  }

  function peg$parsewhitespace() {
    var s0;

    if (peg$c51.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c52); }
    }

    return s0;
  }

  function peg$parsetagName() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c53.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c54); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c53.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c54); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c55(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsetext() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c56.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c57); }
    }
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        if (peg$c56.test(input.charAt(peg$currPos))) {
          s2 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c57); }
        }
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c58(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parsequotedText() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    if (peg$c59.test(input.charAt(peg$currPos))) {
      s2 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c60); }
    }
    while (s2 !== peg$FAILED) {
      s1.push(s2);
      if (peg$c59.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c60); }
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c55(s1);
    }
    s0 = s1;

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};
