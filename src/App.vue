<template>
    <div id="app">
        <table class="tb">
            <tr>
                <th><input type="checkbox" v-model="inpp" />全选</th>
                <th>商品</th>
                <th>单价</th>
                <th>数量</th>
                <th>小记</th>
                <th>操作</th>
            </tr>
            <!-- 循环渲染的元素tr -->
            <tr v-for="item in list" :key="item.id">
                <td><input type="checkbox" v-model="item.c" @click="ww(item.id)" /></td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td><button @click="btn1(item.id)">-</button> <input type="text" v-model="item.quantity" /> <button
                        @click="btn2(item.id)">+</button></td>
                <td>{{ item.price * item.quantity }}</td>
                <td><button @click="del(item.id)">删除</button></td>
            </tr>

            <tr v-if="list.length === 0">
                <td colspan="4">没有数据咯~</td>
            </tr>
        </table>
        <br />
        <button @click="btnsc">删除选中商品</button>
        <button @click="empty">清理购物车</button>
        <br />
        <div style="margin-top: 20px">
            <h2>统计</h2>
            <p>已经选中商品件数:{{ arr.length }}</p>
            <p>总价:{{ allprice }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    id: 1, name: "奔驰xxxxx", price: 12, quantity
                        : 0, c: false,
                },
                {
                    id: 2, name: "宝马xxxxxxx", price: 11, quantity
                        : 0, c: false,
                },
                {
                    id: 3, name: "奥迪xxxxxx", price: 13, quantity
                        : 0, c: false,
                },
            ],
            quantity: 0,
            arr: []
        };
    },
    methods: {
        del(id) {
            const index = this.list.findIndex((ele) => ele.id == id);
            this.list.splice(index, 1);
        },
        btn1(Iid) {
            const index = this.list.findIndex((ele) => ele.id == Iid);
            if (this.list[index].quantity === 0) return alert('删完了熬')
            this.quantity--;
            this.list[index].quantity = this.quantity;
        },
        btn2(Iid) {
            this.quantity++;
            const index = this.list.findIndex((ele) => ele.id == Iid);
            this.list[index].quantity = this.quantity;
        },
        ww(Iid) {
            const index = this.list.findIndex((ele) => ele.id == Iid);
            // let brr = new Set(this.arr)
            if (this.list[index].c) {
                console.log('取消');
                // brr.delete(index);
                this.
                    console.log(brr);
                // this.arr = brr.join("").split('');
            } else {
                console.log('添加');
                this.arr.push(index)
                console.log(this.arr);
            }
        },
        btnsc() {
            this.arr.forEach(val => this.list.splice(val, 1))
            this.arr = []
            // this.arr.forEach((ele) => (ele.c = val))
        },
        empty() {
            this.list = []
        }

    },
    computed: {
        inpp: {
            set(val) {
                this.list.forEach((ele) => (ele.c = val))
            },
            get() {
                return (this.list.length == 0) ? false
                    : this.list.every((ele) => ele.c)
            }
        },
        allprice() {
            return this.arr.reduce((p, k) => {
                return (p += this.list[k].price * this.list[k].quantity)
            }, 0)
            // console.log(aa);
        }
    }
};
</script>

<style>
#app {
    width: 600px;
    margin: 10px auto;
}

.tb {
    border-collapse: collapse;
    width: 100%;
}

.tb th {
    background-color: #0094ff;
    color: white;
}

.tb td,
.tb th {
    padding: 5px;
    border: 1px solid black;
    text-align: center;
}

.add {
    padding: 5px;
    border: 1px solid black;
    margin-bottom: 10px;
}
</style>
