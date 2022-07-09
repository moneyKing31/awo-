<template>
  <div>
    <!-- <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link> -->
    <!-- <router-link to="/part?999">朋友</router-link> -->
    <!-- <router-link to="/part/小吴">朋友</router-link>
    </div> -->
    <div class="footer_wrap">
      <span @click="btn('/find', 'Find')">发现音乐</span>
      <span @click="btn('/my', 'My')">我的音乐</span>
      <span @click="btn('/part', 'Part')">朋友</span>
    </div>
    <div class="top">
      <!-- 7. 设置挂载点-当url的hash值路径切换, 显示规则里对应的组件到这 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btn(targetPath, targetName) {
      // 方式1: path跳转
      this.$router.push({
        // path: targetPath,
        name: targetName,
        params: {
          name: 'qwerty'
        },
        // query:{
        //   id:22
        // }
      });
    },
  },
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap span:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}
.footer_wrap .router-link-active {
  color: white;
  background: rgb(128, 152, 206);
}
</style>
