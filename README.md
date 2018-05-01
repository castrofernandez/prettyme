# prettyme
A tiny prettyfier for HTML and CSS

1. Install 

```
npm install prettyme
```

2. Usage

You need to include the file(s) of the language(s) to use.

```
import prettyme from 'prettyme';
import html from 'prettyme/languages/html';

prettyme.init({
  language: 'html',
  selector: '.prettyme'
});

prettyme.load();
```

3. Run depelopment watch

```
npm run dev
```

Open browser pointing to http://localhost:8383/example/

4. Run tests

```
npm run test
```

5. Build dist

```
npm run build
```

6. Upload build

The build must be generated before (point 6)

```
npm publish
```

7. List of methods

* init: sets initial options.
   * language: 'html', 'css' or 'json'
   * selector: CSS selector to use in *load* method.
   * lines: when true show line numbers.
* load: formats every *selector* set in initial options.

8. Create new language

* Create language in src/languages this will need:
   * create lexer in src/languages