<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>{{ obj.name }}</h2>
    <h3>{{ arr[0] }}</h3>
    <h3>{{ obj.age >= 18 ? '网吧包宿' : '回家' }}</h3>
    <h2>{{ obj.age > 18 ? '成年' : '未成年' }}</h2>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: 'wao~~,是吴龙',
      obj: {
        name: 'wl',
        age: 20,
      },
      arr: [2, 3, 4, 5, 6]

    }
  }
}
</script>

<style>
</style>
