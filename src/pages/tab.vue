<template>
<div class="iui-demo-button">
    <iui-header title="Tab 组件deom">
        <router-link slot="left" to="/">
            <i class="icon iconfont">&#xe622;</i>
        </router-link>
    </iui-header>
    <iui-tab :tabs="tabs" @change="onChange" :index="index" />
    <br/><br/><br/>
    {{text}}
</div>
</template>

<script>
import iuiTab from '../components/tab.vue'
import iuiHeader from '../components/header.vue'
export default {
    name: 'tab-demo',
    data() {
        return {
            tabs: [{
                name: "我是tab1",
                id: 1
            }, {
                name: "我是tab2",
                id: 2
            }, {
                name: "我是tab3",
                id: 3
            }],
            index: 1,
            text: '我是默认值'
        }
    },
    methods: {
        onChange(tab) {
            this.text = '选中的tab是:' + tab.name + '-------它的id为:' + tab.id;
        }
    },
    components: {
        iuiTab,
        iuiHeader
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
