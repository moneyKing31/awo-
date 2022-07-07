<template>
  <div>
    <MyTableVue :arr="list">
      <template #headline>
        <th>$$</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>

      <template #content="scopp">
        <td>{{ scopp.row.id }}</td>
        <td>{{ scopp.row.goods_name }}</td>
        <td>{{ scopp.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-focus
            v-model="scopp.row.inputValue"
            v-if="scopp.row.inputVisible"
            @blur="scopp.row.inputVisible = false"
            @keydown.enter="enterFn(scopp.row)"
            @keydown.esc="scopp.row.inputValue = ''"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scopp.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            v-for="(obj, indee) in scopp.row.tags"
            :key="indee"
            class="badge"
            >{{ obj }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="btnFn(scopp.row.id)">
            删除
          </button>
          <button class="btn btn-success btn-sm" v-wxl>编辑</button>
        </td>
      </template>
    </MyTableVue>
  </div>
</template>

<script>
import MyTableVue from "../components/MyTable.vue";
export default {
  data() {
    return {
      list: [],
      arr: ["wll", "wxl", "wdl", "wql"],
      brr: "wq",
    };
  },
  components: {
    MyTableVue,
  },
  //定义指令
  directives: {
    wxl: {
      inserted(el, binding, prevVnode) {
        console.log(prevVnode);
        const aa = prevVnode.context.arr.includes(prevVnode.context.brr);
        if (aa) {
          el.style.display = "block";
        } else return (el.style.display = "none");
      },
    },
  },
  //获取数据
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
      console.log(res);
      this.list = res.data.data;
      console.log(this.list);
    });
  },
  methods: {
    //删除
    btnFn(id) {
      const index = this.list.findIndex((obj) => obj.id == id);
      this.list.splice(index, 1);
    },
    //添加标签
    enterFn(vul) {
      console.log(vul);
      if (vul.inputValue.trim() == "") return alert("请输入");
      vul.tags.push(vul.inputValue);
      vul.inputValue = "";
    },
  },
};
</script>

<style lang="less" scoped>
.badge {
  margin-right: 9px;
  padding-right: 10px;
  background-color: rgb(108, 161, 182);
}
</style>