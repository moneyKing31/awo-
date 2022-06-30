<template>
    <div>
        <!-- 通过条件判断动态控制节点显示隐藏，适用于频繁切换的应用场景 -->
        <p v-show="issow">我是一个小五郎</p>
        <button @click="issow = !issow">我是一个大wl</button>
        <!-- v-if通过删除添加节点控制显示隐藏 适合一个元素进入界面后即消失的场景-->
        <p v-if="issow1">我是一个小五郎</p>
        <button @click="issow1 = !issow1">我是一个大wl</button>
        <p v-if="age">青少年</p>
        <p v-else-if="age >= 12 && age < 18">少年</p>
        <p v-else>儿童</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            issow: false,
            issow1: false,
            age:16
        }
    }
}
</script>

<style>
</style>