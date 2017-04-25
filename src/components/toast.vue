/**
 * ----------------------------------------------------------
 * toast
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/components/toast
 * ----------------------------------------------------------
 * @param {string} showIt  - 是否显示
 * @param {Boolean} success  - 成功样式
 * @param {Boolean} isLoading  - 是否为loading
 * @param {object} content  - 自定义内容
 *
 */
<template>
<div class="iui-toast">
    <div class="iui-toast_mask" v-show="showIt"></div>
    <div v-show="showIt">
        <div class="iui-toast_spinner" v-show="isLoading">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
        <div class="iui-toast_content"v-show="content"  v-html="content"></div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        showIt: {
            type: Boolean,
            default: false
        },
        isLoading: {
            type: Boolean,
            default: false
        },
        content: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
@import "../style/var.scss";
.iui-toast {
    &_mask {
        opacity: 1;
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,0);
    }

    &_spinner {
        margin: 100px auto;
        width: 50px;
        height: 60px;
        text-align: center;
        font-size: 10px;
        div {
            background-color: #67CF22;
            height: 100%;
            width: 6px;
            display: inline-block;

            -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
            animation: stretchdelay 1.2s infinite ease-in-out;
        }
        .rect2 {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }
        .rect3 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
        }
        .rect4 {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }
        .rect5 {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }
    }

    &_content {
        width: 150px;
        height: auto;
        min-height: 50px;
        line-height: 50px;
        margin: 100px auto;
        text-align: center;
        border-radius: 15px;
        font-size: 18px;
        color: $white;
        background: rgba(0,0,0,0.6);
    }

}
@-webkit-keyframes stretchdelay {
    0%,
    100%,
    40% {
        -webkit-transform: scaleY(0.4);
    }
    20% {
        -webkit-transform: scaleY(1.0);
    }
}
@keyframes stretchdelay {
    0%,
    100%,
    40% {
        transform: scaleY(0.4);
        -webkit-transform: scaleY(0.4);
    }
    20% {
        transform: scaleY(1.0);
        -webkit-transform: scaleY(1.0);
    }
}
</style>
