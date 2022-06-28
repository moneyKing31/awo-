<template>
    <div>
        <input type="text" @keyup.enter="enterFN"><br>
        <input type="text" @keyup.esc="enterNN"><br>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return{
        }
    },
    methods:{
        enterFN(){
            alert('wao~~~~~~~~~~~~~~~~')
        },
        enterNN(){
            alert('wu~~hu~~~~~~~~~~~~~~~~')
        }
    }
}
</script>

<style>
</style>