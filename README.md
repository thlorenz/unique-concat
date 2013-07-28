# unique-concat [![build status](https://secure.travis-ci.org/thlorenz/unique-concat.png)](http://travis-ci.org/thlorenz/unique-concat)

[![testling badge](https://ci.testling.com/thlorenz/unique-concat.png)](https://ci.testling.com/thlorenz/unique-concat)

Concatenates two arrays, removing duplicates in the process and returns one array with unique values.

```js
var concat = require('unique-concat');
var res = concat([ 1, 2, 3 ], [ 1, 2, 3, 4, 5, 6])
console.log(res);
// => [1, 2, 3, 4, 5, 6]
```

## Installation

    npm install unique-concat

## Note

Works only with types that can be properly hashed, which means that they need to have a sensible `.toString()` implementation

Types that work as expected: `int`, `string`

Types that work with caveats: `float` (if one float is part of the array, all numbers are converted to string)

Types that don't work: `object` since `obj.toString === '[ object ]'` for all objects.

For more information see [tests](https://github.com/thlorenz/unique-concat/blob/master/test/index.js)

## License

MIT
