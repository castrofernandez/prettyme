{
  function compactComments(comments) {
    var result = {};
    var length = comments.length;
    var i, comment, count = 0;

    for (i = 0; i < length; i++) {
      comment = comments[i];

      if (comment) {
        result[(i + 1)] = comment;
        count++;
      }
    }

    return count > 0 ? result : null;
  }
}

Content =
  (Rule / Comment)*

Rule = w1:WhitespaceOrComment selector:Selector w2:WhitespaceOrComment "{" w3:WhitespaceOrComment declarations:Declaration* w4:WhitespaceOrComment "}" {
  var comments = compactComments([w1, w2, w3, w4]);
  var result = {
    selector: selector,
    declarations: declarations
  };

  if (comments) {
    result.comments = comments;
  }

  return result;
}

Selector = chars:[^\{(?!\*/)]*  { return chars.join('').replace(/\s\s+/g, ' ').trim(); }

Declaration = w1:WhitespaceOrComment property:Property w2:WhitespaceOrComment ":" w3:WhitespaceOrComment value:Value w4:WhitespaceOrComment ";" w5:WhitespaceOrComment {
  var comments = compactComments([w1, w2, w3, w4, w5]);
  var result = {
    property: property,
    value: value
  };

  if (comments) {
    result.comments = comments;
  }

  return result;
}

Property = chars:[a-zA-Z\-]+ { return chars.join(''); }

Value = chars:[^;(?!\*/)]* { return chars.join('').replace(/\s\s+/g, ' ').trim(); }

WhitespaceOrComment = comments:(whitespace / Comment)* {
  var result = [];
  var length = comments.length, i;

  for (i = 0; i < length; i++) {
    if (comments[i]) {
      result.push(comments[i]);
    }
  }

  return result.length > 0 ? result : null;
}

Comment = "/*" comment:[^(?!\*/)]* "*/" {
  return comment.join('').trim();
}

whitespace = [ \t\r\n] { return null; }