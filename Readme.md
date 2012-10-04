
# Truncate

  Truncate the given string in less or equal length to the given characters

## Installation

```
$ npm install truncate
$ component install component/truncate
```

## API

   - [truncate(str)](#truncatestr)
   - [truncate.left(str)](#leftstr)
   - [truncate.right(str)](#rightstr)
<a name="" />

<a name="truncatestr" />
### truncate(str)
should truncate leading / trailing whitespace.

```js
var truncate = require('truncate');

var killbill = "The lead character, called 'The Bride', was a member of the Deadly Viper Assassination Squad, lead by her lover 'Bill'.";

var summary = truncate(killbill, 20);
// summary -> `The lead character,`
```

<a name="leftstr" />
### truncate.left(str)
```js
var summary = truncate.left(killbill, 20);
// summary -> `The lead character,`
```

<a name="rightstr" />
### truncate.right(str)
```js
var summary = truncate.right(killbill, 20);
// summary -> `her lover 'Bill'.`
```

## Tests

Donwload testing dependecies

```
npm install
```

Run tests

```
make test
```

## License

(The MIT License)
Copyright(c) 2012 Damian Suarez <rdsuarez@gmail.com>

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
