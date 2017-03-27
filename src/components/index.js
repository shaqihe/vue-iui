/**
 * 此文件把所以的组件整合， 提供一个install 方法，
 * vue 里  当调用者 用use() 时，其实是调用插件的 instal()方法
 */
import Vue from 'vue'

import Button from './button.vue'
import Footer from './footer.vue'
import Header from './header.vue'
import Tab from './tab.vue'


const IVue = {
    Button,
    Footer,
    Header,
    Tab
}

const install = function() {
    Object.keys(IVue).forEach((key) => {
        Vue.component(IVue[key].name, IVue[key])
    })
}


export default Object.assign(IVue, { install });