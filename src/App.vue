<template>
<div id="app">
    <router-view class="router-view"></router-view>
</div>
</template>

<script>
import "./style/icon/iconfont.css"
import Hello from './components/Hello'

export default {
    name: 'app',
    components: {
        Hello
    }
}
</script>

<style lang="scss">
@import "./style/var.scss";
.iui-header_left {
    .icon {
        color: $white;
        font-size: 25px;
    }
}
</style>
