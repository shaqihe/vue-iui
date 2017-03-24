
/**
 * ----------------------------------------------------------
 * button
 *
 * @version  1.0
 * @author shaqihe(shaqihecome@163.com)
 *
 * @module src/components/button
 * ----------------------------------------------------------
 * @param {string} type [info, success, warning, danger] - 按钮类型
 * @param {Boolean} disabled  - 按钮是否禁止
 *
 *
 */
<template>
    <button :disabled="disabled" class="iui-button" @click="handleClick" :class="[
          type ? 'iui-button_' + type : '',
          {'is-disabled': disabled}
        ]">
        <span v-if="$slots.default"><slot></slot></span>
      </button>
</template>
<script>
export default {
    name: 'iui-button',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClick(evt) {
            this.$emit('click', evt);
        }
    }
};
</script>

<style lang="scss">
@import "../style/var.scss";
.iui-button.is-disabled {
    opacity: .6;
}

.iui-button {
    box-sizing: border-box;
    width: 100%;
    height: 41px;
    margin: 10px 0;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;
    border: 1px solid $border-base;
    background-color: $white;
    font-size: 18px;
    overflow: hidden;
    -webkit-appearance: none;

    &:active:not(.is-disabled) {
        color: $silver;
        background-color: $dark-white;
    }

    &:focus {
        outline: 0;
    }


    &_info {
        color: #fff;
        background-color: $blue;
        border-color: $blue;
        &:active:not(.is-disabled) {
            background-color: $dark-blue;
            color: $dark-white;
        }
    }

    &_success {
        color: #fff;
        background-color: $success;
        border-color: $success;
        &:active:not(.is-disabled) {
            background-color: $success-dark;
            color: $dark-white;
        }
    }

    &_warning {
        color: #fff;
        background-color: $warning;
        border-color: $warning;
        &:active:not(.is-disabled) {
            background-color: $warning-dark;
            color: $dark-white;
        }
    }

    &_danger {
        color: #fff;
        background-color: $danger;
        border-color: $danger;
        &:active:not(.is-disabled) {
            background-color: $danger-dark;
            color: $dark-white;
        }
    }
}
</style>
