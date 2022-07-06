<template>
  <div>
    <button @click="comName = 'UserName'" style="margin: 10px;">手机号注册</button>
    <button @click="comName = 'UserInfo'" style="margin-bottom: 10px;">邮箱注册</button>

    <div style="border: 1px solid blue;">
      <keep-alive>
        <component :is="comName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import UserName from './components/01/UserInfo.vue'
import UserInfo from './components/01/UserName.vue'
export default {
  data() {
    return {
      value: '',
      comName: "UserName"
    };
  },
  components: {
    UserName,
    UserInfo
  }
}
</script>

<style>
</style>