<template>
    <div>
        <div>
            <span>年龄:</span>
            <input type="text" v-model.number="age">
            <br>
        </div>
        <div>
            <span>人生格言:</span>
            <input type="text" v-model.trim="motto">
            <br>
        </div>
        <div>
            <span>自我介绍:</span>
            <textarea v-model.lazy="intro"></textarea><br>
        </div>
    </div>
</template>

<script>
export default {
    name:'App',
    data(){
        return{
        age:'',
        motto:'',
        intro:''
        }

    }

}
</script>

<style>
</style>