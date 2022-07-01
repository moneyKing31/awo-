<!-- ## 3. vue计算属性

### 3.0 多个数据计算的问题

需求如下：

计算商品总价：商品是否大于500 符合条件可使用400的优惠券 否则不可使用

```vue -->
<template>
    <div>
        <!-- 购物车商品总价： -->
        <!-- 商品是否大于500 符合条件可使用400的优惠券 否则不可使用 -->
        {{ totalPrice }}
        {{ totalPrice }}
        {{ totalPrice }}
        {{ totalPrice }}
        {{ totalPrice }}
        <!-- 在模板中放入太多的逻辑，这样会导致 会让模板过重， 并且代码 很难以维护 -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            total: 6,// 商品数量
            price: 98,// 单价
            coupon: 400 // 优惠券
        }
    },
    computed: {
        totalPrice() {
            console.log('计算')
            return this.total * this.price >= 500 ? this.total * this.price - this.coupon : this.total * this.price
        }
    }
}
</script>