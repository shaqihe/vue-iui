<template>
<div class="iui-demo-button">
    <iui-header title="Footer 组件deom">
        <router-link slot="left" to="/">
            <i class="icon iconfont">&#xe622;</i>
        </router-link>
    </iui-header>
    <br/><br/><br/>
    <iui-footer>
        <a href="#" slot="link">git地址|</a>
        <a href="#" slot="link">回到主页</a>
        <span slot="text">@欢迎来到vue-iui</span>
    </iui-footer>

</div>
</template>

<script>
import iuiFooter from '../components/footer.vue'
import iuiHeader from '../components/header.vue'
export default {
    name: 'button-demo',
    data(){
        return {
            disabled: true
        }
    },
    components: {
        iuiFooter,
        iuiHeader
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
