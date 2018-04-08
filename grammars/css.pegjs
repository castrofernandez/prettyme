Content =
  (Rule)*

Rule = selector:Selector whitespace* "{" whitespace* declarations:Declaration* whitespace* "}" {
  return {
    selector: selector,
    declarations: declarations
  };
}

Selector = chars:[^\{]*  { return chars.join('').replace(/\s\s+/g, ' ').trim(); }

Declaration = property:Property whitespace* ":" whitespace* value:Value whitespace* ";" whitespace* {
  return {
    property: property,
    value: value
  };
}

Property = chars:[a-zA-Z\-]+ { return chars.join(''); }

Value = chars:[^;]* { return chars.join('').replace(/\s\s+/g, ' ').trim(); }

whitespace = [ \t\r\n]