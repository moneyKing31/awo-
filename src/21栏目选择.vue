<template>
    <div>
        <ul>
            <li :class="{ active: index === currentIndex }" v-for="(item, index) in navs" :key="item"
                @click="changeFn(index)">{{ item }}</li>
            <!-- <li @click="changeFn(index)">高中起点</li> -->
        </ul>
    </div>
</template>

<script>
// import { cursorTo } from 'readline'

export default {
    data() {
        return {
            navs: ['大学起点', '高中起点', '初中起点', '小学起点'],
            currentIndex: 0
        }
    },
    methods: {
        changeFn(val) {
            console.log(val);
            this.currentIndex = val;
        }
    }
}
</script>

<style>
ul {
    list-style: none;
    border-radius: 10px;
    width: 400px;
    overflow: hidden;
    padding: 0;
}

ul li {
    float: left;
    width: 100px;
    height: 40px;
    background-color: #ccc;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}

li.active {
    background-color: blue;
}
</style>