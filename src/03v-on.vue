<template>
  <div>
    <p>商品总数{{ count }}</p>
    <button @click="addfn">-1</button>
    <button @click="addfn1">+1</button>
    <button @click="addfn2(6)">+6</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addfn() {
      if (this.count < 1) return alert('到底啦')
      this.count--
    },
    addfn1() {
      this.count++
    },
    addfn2(val) {
      this.count += val
    }
  }
}
</script>

<style>
</style>