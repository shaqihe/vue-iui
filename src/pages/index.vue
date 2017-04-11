<template>
<div class="page-index">
    <ul class="page-index_uilist">
        <li>
            <router-link class="page-index_router" to="button">
                <i class="icon iconfont f-fl">&#xe63c;</i>
                <p class="f-fl">button组件</p>
                <i class="icon iconfont f-fr">&#xe63b;</i>
            </router-link>
        </li>
        <li>
            <router-link class="page-index_router" to="header">
                <i class="icon iconfont f-fl">&#xe8ed;</i>
                <p class="f-fl">Header组件</p>
                <i class="icon iconfont f-fr">&#xe63b;</i>
            </router-link>
        </li>
        <li>
            <router-link class="page-index_router" to="footer">
                <i class="icon iconfont f-fl">&#xe8ec;</i>
                <p class="f-fl">Footer组件</p>
                <i class="icon iconfont f-fr">&#xe63b;</i>
            </router-link>
        </li>
        <li>
            <router-link class="page-index_router" to="tab">
                <i class="icon iconfont f-fl">&#xe610;</i>
                <p class="f-fl">Tab组件</p>
                <i class="icon iconfont f-fr">&#xe63b;</i>
            </router-link>
        </li>
        <li>
            <router-link class="page-index_router" to="button">
                <i class="icon iconfont f-fl">&#x348d;</i>
                <p class="f-fl">Search组件</p>
                <i class="icon iconfont f-fr">&#xe63b;</i>
            </router-link>
        </li>
        <li>
            <router-link class="page-index_router" to="button">
                <i class="icon iconfont f-fl">&#xe66a;</i>
                <p class="f-fl">左右滑动列表 swipe组件</p>
                <i class="icon iconfont f-fr">&#xe63b;</i>
            </router-link>
        </li>
        <li>
            <router-link class="page-index_router" to="dialog">
                <i class="icon iconfont  f-fl">&#xe606;</i>
                <p class="f-fl">dialog组件</p>
                <i class="icon iconfont f-fr">&#xe63b;</i>
            </router-link>
        </li>
        <li>
            <router-link class="page-index_router" to="button">
                <i class="icon iconfont f-fl">&#xe64b;</i>
                <p class="f-fl">loading组件</p>
                <i class="icon iconfont f-fr">&#xe63b;</i>
            </router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../style/var.scss";
.page-index {
    &_uilist {
        list-style: none;
        padding: 10px;
        li {
            border-bottom: 1px solid $border-base;
            height: 45px;
            line-height: 45px;
        }
        .f-fr {
            float: right;
            color: $border-base;
        }

        .f-fl {
            float: left;;
            color: $black;
        }
        .icon {
            font-size: 28px;
            margin-right: 10px;
        }
    }

    &_router {
        display: block;
        text-decoration: none;
        color: $extra-light-black;
        height: 45px;
        line-height: 45px;
    }
}
</style>
