import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
})

const Office = window.Office
Office.initialize = () => {
  new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
  })
}
