# spherio
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

IT'S A GIANT SPHERE.

## Installation
```sh
$ git clone https://github.com/yoshuawuyts/spherio
$ cd spherio && npm install
```

## Usage
```txt
Lifecycle scripts included in spherio:
  start
    node .
  prepublish
    if [ "$NODE_ENV" != "production" ]; then npm run dev; fi

available via `npm run-script`:
  clean
    rm-modules
  dev
    linklocal link -r && linklocal list -r | bulk -c 'npm install --production'
  start:watch
    NODE_ENV=development nodemon -i 'node_modules/' -i 'client*' -i 'component*' -- ./index.js | garnish
  watch
    npm run start:watch
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/spherio.svg?style=flat-square
[npm-url]: https://npmjs.org/package/spherio
[travis-image]: https://img.shields.io/travis/yoshuawuyts/spherio/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/spherio
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/spherio/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/spherio
[downloads-image]: http://img.shields.io/npm/dm/spherio.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/spherio
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
