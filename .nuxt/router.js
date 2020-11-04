import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _47815c28 = () => interopDefault(import('..\\pages\\Breakpoint.vue' /* webpackChunkName: "pages/Breakpoint" */))
const _0ee5c32e = () => interopDefault(import('..\\pages\\Button.vue' /* webpackChunkName: "pages/Button" */))
const _ddbced06 = () => interopDefault(import('..\\pages\\Floating.vue' /* webpackChunkName: "pages/Floating" */))
const _37da5052 = () => interopDefault(import('..\\pages\\Footer.vue' /* webpackChunkName: "pages/Footer" */))
const _9b11f25a = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _3cc3e1ac = () => interopDefault(import('..\\pages\\Stepper.vue' /* webpackChunkName: "pages/Stepper" */))
const _bc7fb5ea = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/RSWebsiteRedesign/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Breakpoint",
    component: _47815c28,
    name: "Breakpoint"
  }, {
    path: "/Button",
    component: _0ee5c32e,
    name: "Button"
  }, {
    path: "/Floating",
    component: _ddbced06,
    name: "Floating"
  }, {
    path: "/Footer",
    component: _37da5052,
    name: "Footer"
  }, {
    path: "/inspire",
    component: _9b11f25a,
    name: "inspire"
  }, {
    path: "/Stepper",
    component: _3cc3e1ac,
    name: "Stepper"
  }, {
    path: "/",
    component: _bc7fb5ea,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
