<template>
    <div>
        <!-- v-bind:style="{css属性：值}" -->
        <p :style="{ color: 'blue', fontSize: '100px' }">123adddddds</p>
        <p :style="{ color: clorCo, fontSize: '80px' }">24srdytfyug</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            clorCo: 'green'
        }
    }
}
</script>

<style>
</style>