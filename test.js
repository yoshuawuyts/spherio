const test = require('tape')
const spherio = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(spherio)
})
