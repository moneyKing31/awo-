<template>
    <div>
        <p>原来的样子: {{ msg }}</p>

        <p>使用翻转过滤器: {{ msg.trim() | reverse | reverse1 }}</p>
        <p :title="msg | toUp">鼠标长停</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello, Vue'
        }
    },

    filters: {
        toUp(val) {
            return val.toUpperCase()
        },
        reverse(val) {
            return val.split('').reverse().join('-')
        },
    },
    // filters: {

    // }
}
</script>

<style>
</style>