# prettyme
A tiny prettyfier for HTML and CSS

1. Install 

```
npm install prettyme
```

2. Usage

```
import prettyme from 'prettyme';

prettyme.init({
  language: 'html',
  selector: '.prettyme'
});

prettyme.load();
```

3. Generate parser from grammar

```
pegjs ./src/parsers/html.pegjs
```

4. Run depelopment watch

```
npm run dev
```

5. Run tests

```
npm run test
```

6. Build dist

```
npm run build
```

7. Upload build
```
npm publish
```

8. List of methods

* init: sets initial options.
   * language: 'html' or 'css'
   * parser: function to parse the code. (only to use custom parser)
   * prettier: prettier to use. (only to use custor prettier)
   * selector: CSS selector to use in *load* method.
* load: formats every *selector* set in initial options.
* parse(code, options): parses the received code with the optional options.
* format(code, options): formats the received code with the optional options.