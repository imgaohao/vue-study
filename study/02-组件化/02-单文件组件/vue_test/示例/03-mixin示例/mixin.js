export const hunhe = {
    //methods会合并到组件的methods中，重复的以组件的methods为主
    methods: {
        show() {
            console.log(this.name, this.age)
        }
    },
    //mounted会合并到组件的mounted中，在组件的mounted之前执行
    mounted() {
        console.log('hunhe mounted')
    }
}

export const hunhe2 = {
    //data会合并到组件的data中，重复的属性以组件的data为主
    data() {
        return {
            name: "hunhe2",
            age: 18
        }
    }
}