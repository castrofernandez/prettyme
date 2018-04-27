Content = 
  Element

Element = Array

Array = "[" whitespace* elements:ArrayElement* whitespace* "]" {
    return {
      type: 'array',
      value: elements
    }; 
  }

ArrayElement = element:Element {
    return element;
  }
  / element:Element "," elements:Element+ {
    elements.push(element);

    return elements;
  }

whitespace = [ \t\r\n]