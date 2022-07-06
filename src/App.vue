<template>
  <div>
    <UseTable1>
      <template v-slot:age="scppe">
        <input type="text" v-model="scppe.row.age">
      </template>
      <template v-slot:name="scppe">
        <input type="text" v-model="scppe.row.name">
      </template>
      <template v-slot:2="scppe">
        <p>{{ scppe.row.headImgUrl }}</p>
      </template>
      <template v-slot:1="scppe">
        <a :href="scppe.row.headImgUrl">{{ scppe.row.headImgUrl }}</a>
      </template>
      <template v-slot:0="scppe">
        <img style="width: 100px;" :src="scppe.row.headImgUrl">
      </template>
    </UseTable1>
  </div>
</template>

<script>
import UseTable1 from './components/UseTogenerate.vue'
export default {
  components: {
    UseTable1
  }
}
</script>

<style>
</style>