<template>
<div class="iui-demo-button">
    <h1 class="iui-demo-button_title">button demo</h1>
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
export default {
    name: 'button-demo',
    data(){
        return {
            disabled: true
        }
    },
    components: {
        iuiButton
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../style/var.scss";
.iui-demo-button {
    &_title {
        text-align: center;
        color: $light-blue;
        border-bottom: 1px solid $dark-blue;
    }
}
</style>
