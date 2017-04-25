<template>
<div class="iui-demo-button">
    <iui-header title="Toast 组件deom">
        <router-link slot="left" to="/">
            <i class="icon iconfont">&#xe622;</i>
        </router-link>
    </iui-header>
    <br/><br/><br/>
    <iui-button type="info" @click="dialog1()"> 开启loading效果，3秒后关闭</iui-button>
    <iui-button type="success" @click="dialog2()"> 自定义toast内容</iui-button>
</div>
</template>

<script>
export default {
    name: 'Dialog-demo',
    data(){
        return {
            disabled: true
        }
    },
    methods: {
        dialog1 () {
            this.toast = this.$toast({isLoading: true});
            setTimeout(()=>{
                this.toast.hide();
            }, 3000);
        },
        dialog2 () {
            this.$toast(
                {
                    content: '成功!',
                }
            );
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
