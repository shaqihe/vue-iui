import Vue from 'vue';               //引入vue
import VueRouter from 'vue-router';  //引入 vue-router
Vue.use(VueRouter);                  //此应用安装router功能
/**
 * 路由的设置(这里是路由的主要设置，也就是说设置 哪个url和具体所渲染那个组件)
 *
 * @method  module:src/router/router#routes
 * @returns {obj}
 */
const routes = [
    {
        path: "/index",
        name: "index",
        component: (resolve) => {
            require(["../pages/index.vue"], resolve);
        }
    },
    {
        path: '*',
        redirect: {
            name: "index",
        },
    },
];
/**
 * 实例化路由（在这个文件里把router直接实例化，暴露出去供APP直接用）
 *
 * @method  module:src/router/router#VueRouter
 * @returns {obj}
 */
export default new VueRouter({
    mode: "hash",
    routes: routes
});
