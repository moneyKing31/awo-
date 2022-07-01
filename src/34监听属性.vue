<template>
    <div>
        <span>用户名:</span>
        <input type="text" v-model="account.name" />
        <span>密码:</span>
        <input type="text" v-model="account.pwd" />
    </div>
</template>

<script>

export default {
    data() {
        return {
            account: {
                name: "",
                pwd: "",
                msg: {
                    msg: {
                        a: "1",
                    },
                },
            },
            // name: "",
        };
    },
    // 目标: 侦听到name值的改变
    /*
    语法:
      watch: {
        变量名 (newVal, oldVal){
          // 变量名对应值改变这里自动触发
          // newVal 是改变之后的值
          // oldVal 是改变之前的值  
        }
      }
    */
    watch: {
        // newVal: 当前最新值
        // oldVal: 上一刻值
        // name(newVal, oldVal) {
        //     console.log(newVal, oldVal);
        // }

        //单值返回最新值
        // name(newVal,) {
        //     console.log(newVal);
        // }

        //
        "account.name": {
            handler(newVal, oldVal) {
                console.log('newVal', newVal);
            }
        }
    }
}
</script>

<style>
</style>