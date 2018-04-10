# prettyme
A tiny prettyfier for HTML and CSS

1. Install 

```
npm install prettyme
```

2. Usage

```
const htmlParse = require('../grammars/html');
const cssParse = require('../grammars/css');
const htmlPrettier = require('../prettiers/html');
const cssPrettier = require('../prettiers/css');

prettyme.init({
  parser: htmlParse.parse,
  prettier: htmlPrettier,
  selector: '.prettyme'
});

prettyme.load();
```

3. Generate parser from grammar

```
pegjs ./grammars/html.pegjs
```

4. Run tests

```
npm test
```

5. List of methods

* init: sets initial options.
   * parser: function to parse the code.
   * prettier: prettier to use.
   * selector: CSS selector to use in *load* method.
* load: formats every *selector* set in initial options.
* parse(code, options): parses the received code with the optional options.
* format(code, options): formats the received code with the optional options.