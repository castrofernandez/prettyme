Content =
  (Tag / text)*

Tag =
  emptyTag:EmptyTag {
    return {
      tag: emptyTag.tag,
      type: 'empty',
      attributes: emptyTag.attributes
    }  
  }
  / startTag:StartTag {
    return {
      tag: startTag.tag,
      type: 'open',
      attributes: startTag.attributes
    }
  }
  / closeTag:CloseTag  {
    return {
      tag: closeTag,
      type: 'close'
    };
  }

EmptyTag = "<" whitespace* name:emptyTagName attributes:Attribute* whitespace* ">" {
    return {
      tag: name,
      attributes: attributes
    }; 
  }
  / "<" whitespace* name:tagName whitespace* attributes:Attribute* whitespace* "/>" { 
    return {
      tag: name,
      attributes: attributes
    }; 
  }

StartTag = "<" whitespace* name:tagName attributes:Attribute* whitespace* ">" {
    return {
      tag: name,
      attributes: attributes
    }; 
 }

Attribute = whitespace* name:tagName value:AttributeValue? { 
    return {
      name: name,
      value: value
    };
}

AttributeValue = whitespace* "=" whitespace* '"' value:quotedText '"' { return value; }
  / whitespace* "=" whitespace* value:tagName { return value; }

CloseTag =
  "</" whitespace* name:tagName whitespace* ">" { return name; }

emptyTagName = "area"
  / "base"
  / "br"
  / "col"
  / "embed"
  / "hr"
  / "img"
  / "input"
  / "keygen"
  / "link"
  / "meta"
  / "param"
  / "source"
  / "track"
  / "wbr"

whitespace = [ \t\r\n]

tagName = chars:[a-zA-Z\-]+ { return chars.join(''); }

text = chars:[^<]+  {
  var value = chars.join('');

  if (value.trim() === '') {
    return null;
  }

  return {
    type: 'text',
    value: value
  };
}

quotedText = chars:[^\"]*  { return chars.join(''); }