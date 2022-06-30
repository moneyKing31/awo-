<template>
    <div>
        <p :class="{ active: activeFlag }" class="ppp">我是p标签</p>
        <button @click="activeFlag = !activeFlag">v-cloak</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            activeFlag: true
        };
    }
}
</script>

<style>
.active {
  color: red;
}
.ppp {
  border: 10px solid #ccc;
}
</style>