export default {
    install(Vue) {
        //添加全局过滤器
        Vue.filter('upper', function (str) {
            return str.toUpperCase()
        })

        //添加全局指令
        Vue.directive('focus', {
            inserted(el) {
                el.focus()
            }
        })

        //添加全局混合对象
        Vue.mixin({
            methods: {
                show() {
                    console.log(this.name)
                }
            }
        })

        //添加全局方法，所有Vue实例（vm）和组件（vc）都可以调用
        Vue.prototype.hello = function () {
            console.log('hello vue')
        }
    }
}