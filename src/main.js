// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import VueI from './components/index'

Vue.use(VueI);

new Vue({
    router,  //实例化APP时 直接传入router
    render: h => h(App)
}).$mount("#app");
