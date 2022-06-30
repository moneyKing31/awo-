<template>
    <div>
        <h1>{{obj1.e}}</h1>
        <h1>{{obj2.e}}</h1>
        <button @click="change">obj1</button>
        <button @click="change1">obj2</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            obj1: {
                a: 1,
                b: 2,
                c: 3,
            },
            obj2: {}
        }
    },

    methods: {
        change() {
            this.$set(this.obj1, 'e', 20)
        },
        change1() {
            this.obj2 = {
                e: 20
            }
        }
    }
}
</script>