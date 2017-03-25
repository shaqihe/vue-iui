<template>
<div class="iui-demo-button">
    <iui-header title="Buttom 组件deom">
        <router-link slot="left" to="/">
            <i class="icon iconfont">&#xe622;</i>
        </router-link>
    </iui-header>
    <br/><br/><br/>
    <iui-Button> 普通按钮</iui-Button>
    <iui-Button type="info"> primary按钮</iui-Button>
    <iui-Button type="success"> success按钮</iui-Button>
    <iui-Button type="warning"> primary按钮</iui-Button>
    <iui-Button type="danger"> danger按钮</iui-Button>
    <iui-Button type="danger" :disabled="disabled" > 按钮 disabled</iui-Button>
</div>
</template>

<script>
import iuiButton from '../components/button.vue'
import iuiHeader from '../components/header.vue'
export default {
    name: 'button-demo',
    data(){
        return {
            disabled: true
        }
    },
    components: {
        iuiButton,
        iuiHeader
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
