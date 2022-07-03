<template>
    <header class="header">
        <h1>todos</h1>
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
        <label for="toggle-all"></label>
        <!-- label 可以关联一个表单标签 -->
        <input class="new-todo" placeholder="输入任务名称-回车确认" autofocus @keydown.enter="dowFn" v-model.trim="task" />
    </header>
</template>

<script>
export default {
    data() {
        return {
            task: ''
        }
    },
    methods: {
        dowFn() {
            if (this.task.length === 0) return alert('任务不为空')
            this.$emit('append', this.task)
            this.task = ''
        }
    },
    computed: {
        isAll: {
            get() {
                //this.$parent 父组件
                return this.$parent.list.every((ele) => ele.isDone)
            },
            set(checked) {
                this.$parent.list.forEach((ele) => ele.isDone = checked)
            }
        }
    }

}
</script>