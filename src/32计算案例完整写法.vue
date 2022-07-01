<!-- ## 3. vue计算属性

### 3.0 多个数据计算的问题

需求如下：

计算商品总价：商品是否大于500 符合条件可使用400的优惠券 否则不可使用

```vue -->
<template>
    <div>
        <div>
            <span>姓：</span>
            <input type="text" v-model="fullx"><br><br>
            <span>名:</span>
            <input type="text" v-model="fullm"><br><br>
            <span>全：</span>
            <input type="text" v-model="full"><br>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            fullx: '',
            fullm: '',
        }
    },
    computed: {
        full: {
            // console.log('计算'),
            //设置值
            set(val) {
                console.log(val);
                const arr = val.split('.');
                this.fullx = arr[0] || "";
                this.fullm = arr[1] || "";
            },
            //取值
            get() {
                return this.fullx ? this.fullx + '.' + this.fullm : '';
            }
        }
    }
}
</script>