<template>
    <div>
        <!-- 
    	v-model:是实现vuejs变量和表单标签value属性, 双向绑定的指令
    -->
        <div>
            <span>用户名:</span>
            <input type="text" v-model.trim="username" />
            <br>
        </div>
        <div>
            <span>密码:</span>
            <input type="password" v-model="pass" />
        </div><br>
        <div>
            <span>来自于哪里?</span>
            <select v-model="from">
                <option value="西安">陕西-西安</option>
                <option value="燕京">北京-燕京</option>
                <option value="大连">辽宁-大连</option>
            </select>
            <br>
        </div>
        <div>
            <!-- checkbox特殊, 内部判断v-model是数组, 绑定value值, 非数组绑定checked属性 -->
            <span>爱好</span>
            <input type="checkbox" v-model="hobby" value="吃饭" /><span>吃饭</span>
            <input type="checkbox" v-model="hobby" value="逛街" /><span>逛街</span>
            <input type="checkbox" v-model="hobby" value="旅游" /><span>旅游</span>
            <br>
        </div>
        <div>
            <span>性别</span>
            <input type="radio" name="sex" v-model="sex" value="男" /><span>男</span>
            <input type="radio" name="sex" v-model="sex" value="女" /><span>女</span>
        </div>
        <div>
            <span>自我介绍</span>
            <textarea v-model="intro"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            pass: "",
            from: "",
            hobby: [],
            sex: "",
            intro: "",
        };
        // 总结:
        // 特别注意: v-model, 在input[checkbox]的多选框状态
        // 变量为非数组, 则绑定的是checked的属性(true/false) - 常用于: 单个绑定使用
        // 变量为数组, 则绑定的是他们的value属性里的值 - 常用于: 收集勾选了哪些值
    }
};
</script>

<style>
</style>