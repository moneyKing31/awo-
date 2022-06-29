<template>
    <div>
        <h3>{{ nam }}中最多的字符是:{{ num }}</h3>
        <button @click="reduceFn">点击查看出现最多的字符是多少</button><br>
        <h3>{{ arr }}数组的和是：{{ age }}</h3>
        <button @click="reduceEn">点击查看数组和</button>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            num: '',
            age: '',
            nam: 'qqqqqwertyuierqweasd',
            arr: [{ a: 100 }, { a: 20 }, { a: -10 }],
            nun:''
        }
    },
    methods: {
        reduceEn() {
            this.age = this.arr.reduce(function (pre, curr) {
                return pre + curr.a
            }, 0)
        },
        reduceFn() {
            let a = this.nam.split('')
            // let max = null;    //出现次数最多的元素
            // let nun = '';    //该元素出现次数
            console.log(a);
            this.num = a.reduce(function (p, k) {    //reduce遍历
                p[k] ? p[k]++ : p[k] = 1;  //k代表当前正在遍历的元素。应用到p[k]里，k表示p对象里的一个键，p[k]表示该键对应的值。
                if (p[k] > nun) {
                    nun = p[k]
                    max = k
                }
                return nun    //最后返回一个对象
            }, {})
        }
    }
}
</script>

<style>
</style>