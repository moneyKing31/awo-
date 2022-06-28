<template>
    <div>
        <h1>{{ message }}</h1>
        <button @click="btn">点点</button>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            message: 'wao~~wxl'
        }
    },
    methods: {
        btn() {
            let arr = this.message.split('');
            this.message = this.message.split('').reverse().join('');
            console.log(arr);
            console.log(arr.reverse());
        }
    }
}
</script>

<style>
</style>