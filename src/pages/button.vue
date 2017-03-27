<template>
<div class="iui-demo-button">
    <iui-header title="Buttom 组件deom">
        <router-link slot="left" to="/">
            <i class="icon iconfont">&#xe622;</i>
        </router-link>
    </iui-header>
    <br/><br/><br/>
    <iui-button> 普通按钮</iui-button>
    <iui-button type="info"> primary按钮</iui-button>
    <iui-button type="success"> success按钮</iui-button>
    <iui-button type="warning"> primary按钮</iui-button>
    <iui-button type="danger"> danger按钮</iui-button>
    <iui-button type="danger" :disabled="disabled" > 按钮 disabled</iui-button>
</div>
</template>

<script>
export default {
    name: 'button-demo',
    data(){
        return {
            disabled: true
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
