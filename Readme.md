
# Truncate

  Truncate the given string in less or equal length to the given characters
  number (default 200);

## Installation

```
$ npm install truncate
$ component install component/truncate
```

## API

### truncate(str, chars)

```js
var truncate = require('truncate');
truncate('Hello world there', 15); // 'Hello world'
```

### truncate(str, chars, suffix)

```js
var truncate = require('truncate');
truncate('Hello world there', 15, ' ...'); // 'Hello world ...'
```

### truncate.left(str)

```js
var truncate = require('truncate');
truncate.left('Hello world there', 15); // Equivalent to truncate() 'Hello world'
```

### truncate.right(str, chars)

```js
var truncate = require('truncate');
truncate.right('Hello world there', 15); // 'world there'
```

### truncate.right(str, chars, prefix)

```js
var truncate = require('truncate');
truncate.right('Hello world there', 15, '... '); // '... world there'
```

## Tests

Download testing dependecies

```
npm install
```

Run tests

```
make test
```

## License

(The MIT License)
Copyright(c) 2012 Damian Suarez &lt;rdsuarez@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
