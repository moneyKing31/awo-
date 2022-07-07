<template>
  <table class="table table-bordered table-stripped">
    <!-- 表格标题区域 -->
    <thead>
      <tr>
        <slot name="headline"></slot>
      </tr>
    </thead>
    <!-- 表格主体区域 -->
    <tbody>
      <tr v-for="item in arr" :key="item.id">
        <slot name="content" :row="item"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  // name: 'MyTable',
  props: {
    arr: Array,
  },
};
</script>
<style scoped lang="less">
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>