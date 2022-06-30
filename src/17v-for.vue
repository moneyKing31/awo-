<template>
    <div>
        <ul>
            <li v-for="item in arr" :key="item">{{ item }}</li>
            <li v-for="(item, index) in arr" :key="index">{{ item }}-{{ index }}</li>
        </ul>
        <br>
        <h1>遍历1对象</h1>
        <ul>
            <li v-for="(item, key) in tObj" :key="item">{{ item }}-{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: ["章三", "李四", "迪丽热巴", "xxx"],
            stuArr: [
                {
                    id: 1001,
                    name: "孙悟空",
                    sex: "男",
                    hobby: "吃桃子",
                },
                {
                    id: 1002,
                    name: "猪八戒",
                    sex: "男",
                    hobby: "背媳妇",
                },
            ],
            tObj: {
                name: "小黑",
                age: 18,
                class: "1期",
            },
            count: 10,
        };
    },
}
</script>

<style>
</style>