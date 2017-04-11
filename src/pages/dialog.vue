<template>
<div class="iui-demo-button">
    <iui-header title="Dialog 组件deom">
        <router-link slot="left" to="/">
            <i class="icon iconfont">&#xe622;</i>
        </router-link>
    </iui-header>
    <br/><br/><br/>
    <iui-button type="info" @click="dialog1()"> 默认内容</iui-button>
    <iui-button type="success" @click="dialog2()"> 自定义标题、内容</iui-button>
    <iui-button type="warning" @click="dialog3()"> 只有确定键</iui-button>
    <iui-button type="danger" @click="dialog4()"> 点击按钮，触发回调</iui-button>
    <iui-button type="" @click="dialog5()"> 自定义按钮内容</iui-button>
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
            this.$dialog({});
        },
        dialog2 () {
            this.$dialog(
                {
                    content: '自定义加的内容。。。。。',
                    title: '自定义的标题'
                }
            );
        },
        dialog3 () {
            this.$dialog(
                {
                    content: '请联系管理员，增加权限！',
                    title: '无权限',
                    onCancel: true
                }
            );
        },
        dialog4 () {
            this.$dialog(
                {
                    content: '点击确定后触发回调函数',
                    title: '确定回调函数',
                    dialogObj: {
                        okFn() {
                            alert('点击确定后，执行了我！');
                        },
                        cancelFn() {
                            alert('点击取消按钮之后，执行了我');
                        }
                    }
                }
            );
        },
        dialog5 () {
            this.$dialog(
                {
                    cancelBut: '自定义11',
                    okBut: '自定义22'
                }
            );
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
