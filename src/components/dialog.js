/**
 * 把dialog组件实例化，对外暴露方法
 *
 */

import Vue from 'vue'
import vDialog from './dialog.vue'

const Dialog = Vue.extend(vDialog)

export default function(options = {}) {

    const defaultOption = {
        title: '我是标题',
        content: '我是内容...',
        okBut: '确认提交',
        cancelBut: '取消',
        dialogObj: {
            okFn() {
                console.log('你点击了确定键。。。');
            },
            cancelFn() {
                console.log('你点击了取消键。。。');
            }
        }
    }

    var dialogOptions = Object.assign(defaultOption, options);

    const instance = new Dialog({
        data: dialogOptions,
        el: document.createElement('div')
    })

    Vue.nextTick(() => {
        document.body.appendChild(instance.$el)
        instance.showIt = true
    })
}
