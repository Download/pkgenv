# pkgenv <sup><sub>0.4.0</sub></sup>
## One configuration to rule them all

[![npm](https://img.shields.io/npm/v/pkgenv.svg?maxAge=2592000)](https://npmjs.com/package/pkgenv)
[![license](https://img.shields.io/npm/l/pkgenv.svg)](https://creativecommons.org/licenses/by/4.0/)
[![travis](https://img.shields.io/travis/Download/pkgenv.svg)](https://travis-ci.org/Download/pkgenv)
[![greenkeeper](https://img.shields.io/david/Download/pkgenv.svg?maxAge=2592000)](https://greenkeeper.io/)
![mind BLOWN](https://img.shields.io/badge/mind-BLOWN-ff69b4.svg)

<sup><sub><sup><sub>.</sub></sup></sub></sup>

**[pkgcfg](https://npmjs.com/package/pkgcfg) tag to reference environment variables in package.json.**

<sup><sub><sup><sub>.</sub></sup></sub></sup>

## Installation
```sh
npm install --save pkgenv
```

## Registration
`pkgenv` will register itself with `pkgcfg` automatically on `require`. However it
is recommended that you add `'env'` to the array of `pkgcfg` `tags` in `package.json`.
See the pkgcfg docs on [using external tags](https://www.npmjs.com/package/pkgcfg#using-external-tags)
for more information.

## Usage
Assume we have some API key `1e567a-a4e67f` that is set in the environment variable
`API_KEY`. Here is how you can use `{env}` to reference it in your `package.json`:

_package.json:_
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "src/my-project.js",
  "apiKey": "{env API_KEY}",
  "pkgcfg": {
    "tags": [
      "env"
    ]
  }
}
```

Then, read your `package.json` with [pkgcfg](https://npmjs.com/package/pkgcfg):
```js
var pkg = require('pkgcfg')();
console.info(pkg.apiKey); // '1e567a-a4e67f'
```

## {env (name='NODE_JS', defaultValue='')}
Reference environment variables.
* `npm install --save-dev` [pkgenv](https://www.npmjs.com/package/pkgenv)

### name
Optional String. The name of the environment variable to read. Defaults to `'NODE_JS'`.

### defaultValue
Optional String. The default value to use when no environment variable with
the given `name` exists. Defaults tp `''` (empty string).

### examples
```json
{
  "ex1": "{env PATH}",
  "ex2": "{env DOES_NOT_EXIST}",
  "ex3": "{env ('DOES_NOT_EXIST', 'default value')}",
  "ex4": "{env}",
  "ex5": "{env NODE_ENV}",
  "ex6": "{env ('NODE_ENV', '')}",
}
```
* `ex1` will be resolved to the contents of the `PATH` environment variable.
* `ex2` will be resolved to `''` (empty string)
* `ex3` will be resolved to `'default-value'`
* `ex4` will be resolved to the contents of `process.env.NODE_ENV`,
   or to `''` (empty string) if `NODE_ENV` is not set.
* `ex5` is equavalent to `ex4`.
* `ex6` is equavalent to `ex4`.

## Issues
Add an issue in this project's [issue tracker](https://github.com/download/pkgenv/issues)
to let me know of any problems you find, or questions you may have.

## Copyright
Copyright 2016 by [Stijn de Witt](http://StijnDeWitt.com). Some rights reserved.

## License
[Creative Commons Attribution 4.0 (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/)
