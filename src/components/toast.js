/**
 * 把dialog组件实例化，对外暴露方法
 *
 */

import Vue from 'vue'
import vToast from './toast.vue'

const Toast = Vue.extend(vToast)

export default function(options = {}) {

    const defaultOption = {
        content: '',
        isLoading: false
    }

    var dialogOptions = Object.assign(defaultOption, options);
    const instance = new Toast({
        data: dialogOptions,
        el: document.createElement('div')
    })

    Vue.nextTick(() => {
        document.body.appendChild(instance.$el)
        instance.showIt = true;
        
        if (!dialogOptions.isLoading) {
            setTimeout(()=>{
                instance.showIt = false;
                'remove' in window.Element.prototype ? instance.$el.remove() :
                instance.$el.parentNode.removeChild(instance.$el);
            },1000);
        }
    })

    return {
        hide: () => {
            instance.showIt = false;
            'remove' in window.Element.prototype ? instance.$el.remove() :
            instance.$el.parentNode.removeChild(instance.$el);
        }
    }
}
