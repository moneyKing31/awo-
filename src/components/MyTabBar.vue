<template>
    <div class="my-tab-bar">
        <div class="tab-item" v-for="(item, index) in arr" :key="index"
            :class="{ current: item.componentName == highlight }"
            @click="btn(item.componentName)">
            <!-- 图标 -->
            <span class="iconfont" :class="item.iconText"></span>
            <!-- 文字 -->
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            highlight: 'MyGoodsList'
        }
    },
    props: {
        arr: {
            type: Array,
            //自定义条件
            validator(value) {
                if (value.length >= 2 && value.length <= 5) {
                    return true
                }
                return false
            }

        }
    },
    methods: {
        btn(val) {
            this.highlight = val;
            this.$emit('change', val)
            console.log(val);
        }
    }
}
</script>

<style lang="less" scoped>
.my-tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;

    .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.current {
    color: #1d7bff;
}
</style>