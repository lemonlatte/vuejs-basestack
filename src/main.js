var Vue = require('vue')
var VueRouter = require('vue-router')
Vue.use(VueRouter)

var App = Vue.extend({})
var router = new VueRouter()

var main = require('./app/main.vue')

router.map({
    '/': {component: main}
})

router.start(App, '#main')
