
/**
 * ----------------------------------------------------------
 * Tab
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/components/tab
 * ----------------------------------------------------------
 * tabs参数中  name必须传，是内容项
 * @param {Array} [tabs] - tab项 [{name:xxx, id:xxx, xxx: xxx},{name:xxx, id:xxx, xxx: xxx}]
 * @param {Number} [index] - 当前选中第几项
 *
 */
<template>
<div class="iui-tab">
    <template v-for="(tab, i) in tabs">
      <div :class="[{'iui-tab_item-active': i === tabIndex}, 'iui-tab_item']" @click="change(tab, i)">
        {{tab.name}}
      </div>
</template>
  </div>
</template>

<script>
export default {
    name: 'iui-tab',
    props: {
        tabs: {
            type: Array,
            default: () => []
        },
        index: {
            type: Number,
            default: 0
        }
    },

    data() {
        return {
            //转换一下，原则是子组件不会直接操作props的参数
            tabIndex: Number(this.index)
        }
    },

    methods: {
        change(tab, i) {
            this.tabIndex = i;
            this.$emit('change', tab);
        }
    }
}
</script>

<style lang="scss">@import "../style/var.scss";
@import "../style/mixin/set-border.scss";

.iui-tab {
    display: flex;
    width: 100%;
    z-index: 999;
    border-bottom: 1px solid $border-base;

    &_item {
        flex: 1;
        display: block;
        box-sizing: border-box;
        height: 50px;
        padding: 10px 4px;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        border-right: 1px solid $border-base;
        &:last-child {
            border-right: none;
        }
    }

    &_item-active {
        background-color: $gray;
    }
}
</style>
