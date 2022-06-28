<template>
    <div @click="father">
        <a @click.stop="one" href="https://www.baidu.com/">阻止冒泡</a><br>
        <a @click.prevent.stop="two(1, $event)" href="https://www.baidu.com/">传参方法阻止</a><br>
        <!-- <a @click="two(1, $event)">传参方法阻止</a><br> -->
        <button @click.once="btn">运行一次</button>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {

        }
    },
    methods: {
        father() {
            console.log('father');
        },
        one(e) {
            console.log('one');
            e.preventDefault();
        },
        two(val, event) {
            // console.log(val);
            console.log(event);
            event.preventDefault();
        },
        btn() {
            console.log('btn');
        }
    }

}
</script>

<style>
</style>