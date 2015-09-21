const delegator = require('dom-delegator')
const stateAtom = require('state-atom')
const wayfarer = require('wayfarer')
const match = require('hash-match')
const vdom = require('virtual-dom')
const loop = require('virtual-raf')
const h = require('virtual-dom/h')

const view = require('client-views')

// handle `ev-*` events
delegator()

const router = wayfarer('/404')

module.exports = router

router.on('/', wrap(view))

// mount DOM node
const state = stateAtom({})
const tree = loop(state, () => h('div', 'loading'), vdom)
document.body.appendChild(tree())

// match once on init
router(match(window.location.hash))

// listen to hash changes
window.addEventListener('hashchange', () => {
  router(match(window.location.hash))
})

// listen to state changes
state(tree.update)

// wrap
// null -> null
function wrap (view) {
  return () => tree.update(state(), view.bind(null, h, state))
}
