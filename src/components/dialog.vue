/**
 * ----------------------------------------------------------
 * Dialog
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/components/dialog
 * ----------------------------------------------------------
 * @param {string} title  - 标题内容
 * @param {string} content  - 弹窗内容
 * @param {string} cancel  - 取消按钮的内容
 * @param {string} ok  -    确认按钮的内容
 * @param {Boolean} onCancel  - 不提供取消按钮
 * @param {object} dialogObj { okFn(), cancelFn()}  -  两个按钮的点击后额外执行的函数
 *
 */

<template>
<div v-if="showIt" class="iui-dialog">
    <div class="iui-dialog_mask" v-show="show"></div>
    <transition name="popup">
        <div class="iui-dialog_main" v-show="show">
            <div class="iui-dialog_hd">
                {{title}}
            </div>
            <div class="iui-dialog_bd" v-html="content">
            </div>
            <div class="iui-dialog_buts">
                <a href="javascript:;" class="iui-dialog_buts-cancel" v-if="!onCancel" @click="cancel()">{{cancelBut}}</a>
                <a href="javascript:;" class="iui-dialog_buts-confirm" @click="ok()">{{okBut}}</a>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    name: 'iui-dialog',
    props: {
        showIt: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '我们默认标题'
        },
        content: {
            type: String,
            default: '我是默认内容！'
        },
        cancelBut: {
            type: String,
            default: '取消'
        },
        okBut: {
            type: String,
            default: '确定'
        },
        onCancel: {
            type: Boolean,
            default: false
        },
        dialogObj: {
            type: Object,
            default: () => {}
        }
    },

    data() {
        return {
            show: this.showIt
        }
    },

    watch: {
        showIt(newVal) {
            setTimeout(() => {
                this.show = newVal
            }, 100)
        }
    },

    methods: {
        cancel() {
            this.show = false;
            this.dialogObj.cancelFn();
            this.$emit('cancel');
        },

        ok() {
            this.show = false;
            this.dialogObj.okFn();
            this.$emit('ok');
        }
    }
}
</script>

<style lang="scss">@import "../style/var.scss";
.iui-dialog {
    &_mask {
        opacity: 1;
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,.6);
    }

    &_main {
        position: fixed;
        background-color: #fff;
        left: 10%;
        top: 35%;
        z-index: 9999;
        width: 80%;
        max-width: 400px;
        text-align: center;
        border-radius: 5px;
        overflow: hidden;
    }

    &_hd {
        margin-top: 15px;
        font-size: 16px;
        font-weight: 700;
        color: $light-black;
        text-align: center;
    }

    &_bd {
        padding: 10px 20px 15px;
        border-bottom: 1px solid $border-base;
        min-height: 36px;
        position: relative;
    }

    &_buts {
        display: flex;
        height: 40px;
        line-height: 40px;

        &-cancel,
        &-confirm {
            line-height: 35px;
            display: block;
            background-color: #fff;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
        }

        &-cancel {
            color: $extra-light-black;
            border-right: 1px solid $border-base;
        }

        &-confirm {
            color: $dark-blue;
        }
    }
}
</style>
