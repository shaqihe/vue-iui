
/**
 * ----------------------------------------------------------
 * Header
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/components/Header
 * ----------------------------------------------------------
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 *
 */
<template>
    <div class="iui-header" :class="{'is-fixed': fixed}">
        <div class="iui-header_left">
            <slot name="left"></slot>
        </div>
            <h3 class="iui-header_title">{{title}}</h3>
        <div class="iui-header_right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'iui-header',
    props: {
        fixed: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
@import "../style/var.scss";
.iui-header {
    background-color: $blue;
    height: 40px;
    line-height: 40px;
    text-align: center;
    display: flex;
    color: $white;
    &_title {
        flex: 1;
        font-weight: 400;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }

    &_left {
        flex: 0.5;
        text-align: left;
    }

    &_right {
        flex: 0.5;
        text-align: right;
    }
}

.is-fixed {
    position: fixed 0 0 * 0;
    z-index: 9999;
}



</style>
