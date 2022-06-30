<template>
    <div>
        {{ str }}
        <h1 v-html="str"></h1>
        <!-- <h2 v-text="str">{{sty}}</h2> -->
        <!-- 替换提示不影响使用 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            str: '<p>wwwwwww</p>',
            sty: '<p>xxxxwww</p>'
        }
    }
}
</script>

<style>
</style>