<template>
    <div id="app">
        <div>
            <span>姓名:</span>
            <input type="text" placeholder="请输入姓名" v-model.trim="name" />
        </div>
        <div>
            <span>年龄:</span>
            <input type="number" placeholder="请输入年龄" v-model.trim="age" />
        </div>
        <div>
            <span>性别:</span>
            <select v-model="sex">
                <option value="1">男</option>
                <option value="0">女</option>
            </select>
        </div>
        <div>
            <button @click="btnFn">{{ isEdit ? '修改' : '添加' }}</button>
        </div>
        <div>
            <table border="1" cellpadding="10" cellspacing="0">
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
                <tr v-for="item in arr" :key='item.id'>
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ { 0: '女', 1: '男' }[item.sex] }}</td>
                    <td>
                        <button @click="btnnFn(item.id)"> 删除</button>
                        <button @click="editFn(item)">编辑</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr: [
                {
                    id: 100,
                    name: "wl",
                    age: 12,
                    sex: 0

                },
                {
                    id: 102,
                    name: "wxl",
                    age: 12,
                    sex: 0
                },
                {
                    id: 103,
                    name: "wxll",
                    age: 12,
                    sex: 0
                },
                {
                    id: 104,
                    name: "waa",
                    age: 12,
                    sex: 1
                },],

            name: "",
            age: "",
            sex: 0, // 1男 0女
            isEdit: false, // false 代表没有处于编辑  true  代表处于编辑
            currentId: "",
        }

    },
    methods: {
        btnFn() {
            //x修改---------------------
            if (this.isEdit) {
                const index = this.arr.findIndex((ele) => ele.id == this.currentId);
                this.arr[index].name = this.name;
                this.arr[index].age = this.age;
                this.arr[index].sex = this.sex;
                this.currentId = "";
                this.isEdit = false;
                this.clearFn();
                alert("修改完成");
                return;
            }
            //添加--------------
            if (this.name === '' || this.age === '') {
                return alert('请输入值')
            }
            const id = this.arr[this.arr.length - 1] ? this.arr[this.arr.length - 1].id : 100
            this.arr.push({
                id,
                name: this.name,
                age: this.age,
                sex: this.sex,
            }),
                this.clearFn()
        },
        //编辑
        editFn(data) {
            this.isEdit = true;
            console.log(data);
            this.name = data.name;
            this.age = data.age
            this.sex = data.sex;
            // 当前这个数据的id 要保存下来
            this.currentId = data.id;
        },
        //删除
        btnnFn(id) {
            const index = this.arr.findIndex((ele) => ele.id == id);
            this.arr.splice(index, 1);
        },
        //封装清空
        clearFn() {
            this.name = '';
            this.age = '';
            this.sex = 0;
        }
    }

}
</script>