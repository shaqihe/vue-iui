<template lang="html">
    <div class="iui-footer">
        <p class="iui-footer_link">
            <slot name="link"></slot>
        </p>
        <p class="iui-footer_text">
            <slot name="text"></slot>
        </p>
    </div>
</template>

<script>
export default {
    name: 'iui-footer',
}
</script>

<style lang="scss">
@import "../style/var.scss";
.iui-footer {
    min-height: 40px;
    padding: 6px;
    background-color: $gray;
    &_link {
        text-align: center;
        margin-bottom: 8px;
        font-size: 14px;
    }

    &_text {
        text-align: center;
        color: $dark-white;
        font-size: 14px;
    }
}

</style>
