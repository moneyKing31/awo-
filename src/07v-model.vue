<template>
    <div>
        <input type="text" v-model="val">
        <br>
        <input type="text" v-bind:value="vall" @input="iinputs">
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            val: '',
            vall: ''
        }
    },
    methods: {
        iinputs(e) {
            this.vall = e.target.value//表单向vue传
        }
    }
}
</script>

<style>
</style>