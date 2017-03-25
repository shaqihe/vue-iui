<template>
<div class="iui-demo-button">
    <iui-header title="Header 组件deom">
        <router-link slot="left" to="/">
            <i class="icon iconfont">&#xe622;</i>
        </router-link>
    </iui-header>
    <br/><br/><br/>
    <iui-header title="我是标题"/>
    <br/>
    <iui-header title="我是标题,左边有内容">
        <router-link slot="left" to="/">
            <i class="icon iconfont">&#xe622;</i>
        </router-link>
    </iui-header>
    <br/>
    <iui-header title="我是标题,左、右都有内容">
        <router-link slot="left" to="/">
            <i class="icon iconfont">&#xe622;</i>
        </router-link>
        <i class="icon iconfont" slot="right">&#xe63b;</i>
    </iui-header>
    <br/>
    <iui-header title="内容很长长长长我是标题,左、右都有内容">
        <router-link slot="left" to="/">
            <i class="icon iconfont">&#xe622;</i>
        </router-link>
        <i class="icon iconfont" slot="right">&#xe63b;</i>
    </iui-header>
</div>
</template>

<script>
import iuiHeader from '../components/header.vue'
export default {
    name: 'header-demo',
    data(){
        return {
            disabled: true
        }
    },
    components: {
        iuiHeader
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
