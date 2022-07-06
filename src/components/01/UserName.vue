<template>
    <div><p>邮箱</p>
        <input v-model="value" label="邮箱" placeholder="请输入邮箱" /><br>
        <!-- 输入任意文本 -->
        <input v-model="digit" type="digit" placeholder="请输入验证码" style="margin-bottom: 10px;" /><br>
        <van-button type="info" >发送验证码</van-button><br>
        <!-- 允许输入正整数，调起纯数字键盘 -->
        <!-- 输入密码 -->
        <p>登录密码</p>
        <input v-model="password" type="password" label="登陆密码" placeholder="请输入密码" style="margin-bottom: 10px" /><br>
        <input v-model="passwords" type="password" placeholder="请再次输入密码"  /><br>
        <!-- 允许输入数字，调起带符号的纯数字键盘 -->
        <p>邀请码</p>
        <input v-model="number" type="number" label="邀请码" />

    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            digit: '',
            number: '',
            password: '',
            passwords: '',
        };
    },
}
</script>

<style>
</style>