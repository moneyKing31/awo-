<template>
  <div>
    <a :href="href">去百度</a>
    <img :src="imgURL" alt="">
    <img :src="imglocal" alt="">
    <img src="./assets/logo.png" alt="">
  </div>
</template>

<script>
//本地图片使用需要先导入，避免产生直接引入压缩后损坏情况
import imglocal from './assets/logo.png'
export default {
  name: 'App',
  data() {
    return {
      href: 'https://www.baidu.com/',
      imgURL: 'https://oimageb4.ydstatic.com/image?id=-473479362961653993&product=adpublish&format=JPEG&w=960&h=60',
      imglocal: imglocal
    }
  },
}
</script>

<style>
</style>