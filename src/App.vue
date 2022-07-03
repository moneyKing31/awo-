<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @append="createFn"></TodoHeader>
    <TodoMain :list="shoWlist" @del="delFn"></TodoMain>
    <TodoFooter :count="showAr" @select='selected' @clear="clearFn"></TodoFooter>
  </section>
</template>

<script>


import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";


export default {
  data() {
    return {
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 101, name: "睡觉", isDone: false },
        { id: 102, name: "打豆豆", isDone: true },
      ],
      list: JSON.parse(localStorage.getItem('todoList')) || [],
      getSel: 'all'
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    //添加
    createFn(val) {
      const id = this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1
      this.list.push({
        id,
        name: val,
        isDone: false
      })
    },
    //删除
    delFn(id) {
      //匹配当前索引
      let index = this.list.findIndex(obj => obj.id === id)
      this.list.splice(index, 1)
    },
    selected(val) {
      this.getSel = val
    },
    clearFn() { // 清除已完成
      this.list = this.list.filter(obj => obj.isDone == false)
    }
  },
  computed: {
    showAr() {
      return this.list.filter((ele) => !ele.isDone).length
    },
    //
    shoWlist() {
      if (this.getSel == 'no') {
        return this.list.filter((ele) => !ele.isDone);
      } else if (this.getSel == 'yes') {
        return this.list.filter((ele) => ele.isDone);
      } else {
        return this.list
      }
    }
  },
  watch : {
    list:{
      deep: true,
      handler(){
        localStorage.setItem('todoList', JSON.stringify(this.list))
      }
    }
  }
};
</script>