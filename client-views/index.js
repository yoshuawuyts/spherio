const sphere = require('component-sphere')

module.exports = view

function view (h, state) {
  return h('section', [ sphere() ])
}
