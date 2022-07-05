<template>
  <el-main>
    <input type="text" placeholder="搜索-书本名称" style="width: 20%; height: 20px; margin: 15px" v-model.trim="find"
      @keydown.enter="findBtn" />
    <div style="border-top: 1px solid">
      <input type="text" placeholder="书名" style="width: 20; height: 20px; margin: 15px; border-left: 1px solid"
        v-model="objBook.bookname" />
      <input type="text" placeholder="作者" style="width: 20; height: 20px; margin: 15px" v-model="objBook.author" />
      <input type="text" placeholder="出版社" style="width: 20; height: 20px; margin: 15px" v-model="objBook.publisher" />
      <el-button type="primary" round @click="addBtn">添加</el-button>
    </div>

    <el-table :data="tableData" height="250" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column prop="id" label="序号" width="%10"> </el-table-column>
      <el-table-column prop="bookname" label="书名" width="%20">
      </el-table-column>
      <el-table-column prop="author" label="作者" width="%20">
      </el-table-column>
      <el-table-column prop="publisher" label="出版社" width="%30">
      </el-table-column>
      <el-table-column prop="address" label="操作" width="%20">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" style="margin-right: 5px" circle @click="delBtn(scope.row.id)">
          </el-button>
          <el-popover placement="top-start" title="详情" width="200" trigger="hover" :content="
            scope.row.bookname +
            ',' +
            scope.row.author +
            ',' +
            scope.row.publisher
          ">
            <el-button slot="reference" type="primary" icon="el-icon-share" circle></el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      status: 200,
      msg: "获取图书列表成功",
      tableData: [],
      objBook: {
        bookname: "",
        author: "",
        publisher: "",
      },
      find: "",
      publisher: "",
      author: "",
      bookname: "",
    };
  },
  created() {
    this.$axios({
      url: "/api/getbooks",
    }).then((res) => {
      this.tableData = res.data.data;
    });
  },
  methods: {
    addBtn() {
      this.$axios({
        url: "/api/addbook",
        method: "POST",
        data: {
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
          ...this.objBook,
        },
      }).then((res) => {
        // console.log(res);
      });
    },
    findBtn() {
      if (this.find != "") {
        this.$axios({
          url: "/api/getbooks",
          params: {
            bookname: this.find,
          },
        }).then((res) => {
          console.log(res.data.data);
          this.tableData = res.data.data;
          console.log(this.tableData);
        });
      } else {
        this.$axios({
          url: "/api/getbooks",
        }).then((res) => {
          console.log(res.data.data);
          this.tableData = res.data.data;
        });
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    delBtn(id) {
      this.$axios({
        url: "/api/delbook",
        method: "GET",
        params: {
          id: id,
        },
      }).then((res) => {
        // console.log(res);
        this.findBtn();
      });
    },
  },
};
</script>
