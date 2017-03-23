<template>
<div id="app">
    <router-view class="router-view"></router-view>
</div>
</template>

<script>
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

</style>
