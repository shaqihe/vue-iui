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
 * @param {Boolean} loading  - loading样式
 * @param {object} content  - 自定义内容
 *
 */
<template>
<div class="iui-toast">
    <div class="iui-toast_mask" v-show="showIt"></div>
    <div class="weui-toast vw-toast" :class="{'vw-toast__normal': !success && !loading && !icon}" v-show="showIt">
        <i :class="[{
          'weui-icon-success-no-circle': success,
          'weui-loading': loading
        }, 'weui-icon_toast vw-toast-icon']" v-if="success || loading"></i>
        <div  class="" v-html="rawHtml"></div>
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
        success: {
            type: Boolean,
            default: false
        },
        loading: {
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
.iui-toast {
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

}
</style>
