<template>
  <div class="feedback-container">
    <div class="row">
      <input class="txt" type="text" v-model="email" placeholder="邮箱" />
    </div>
    <textarea
      class="txt"
      v-model="txt"
      cols="30"
      rows="3"
      placeholder="留言内容"
    ></textarea>
    <div class="btns row">
      <button class="btn" @click="goFeeback">留言</button>
      <button class="rest btn" @click="reset">重置</button>
    </div>
    <h3 class="row">留言列表</h3>
    <ul>
      <li v-for="item in list" :key="item.fd_id">
        <div class="title">
          来自-{{ item.f_address || "未知地区" }}
          <span>{{ item.time }}</span>
        </div>
        <div class="content" v-text="item.f_context"></div>
        <div class="replay" v-text="item.f_back" v-if="item.f_back"></div>
      </li>
    </ul>
    <div class="nolist" v-if="list.length === 0">暂无留言~</div>
    <button class="more btn" @click="getList" :disabled="isDown">
      加载更多
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/lib/theme-chalk/el-message.css";
import "element-plus/lib/theme-chalk/el-icon.css";
import "element-plus/lib/theme-chalk/base.css"

const postUrl = "/api/react-ant-admin/feedback";
const getListUrl = "/api/react-ant-admin/getfeedback";

const txt = ref("");
const email = ref("");
const page = ref(1);
const pagesize = ref(10);
const isDown = ref(false);
const list = ref([]);
const reset = () => {
  txt.value = "";
  email.value = "";
};
const goFeeback = () => {
  if (!txt.value || !email.value) {
    return ElMessage.error("你还未填写内容");
  }
  axios
    .post(postUrl, { text: txt.value.trim(), email: email.value })
    .then((res) => {
      const { status, msg } = res.data;
      if (status === 0) {
        ElMessage.success({ message: msg, type: "success" });
        reset();
        return;
      }
      ElMessage.error(msg);
    })
    .catch((err) => {
      console.log(err);
      ElMessage.error("请求失败");
    });
};

const getList = (tip = false) => {
  if (isDown.value) {
    return ElMessage.error("没有更多数据了~.~");
  }
  axios
    .post(getListUrl, { page: page.value, pagesize: pagesize.value })
    .then((res) => {
      const {
        data: { status, msg, data },
      } = res;
      if (status === 0) {
        list.value.push(...data);
        page.value += 1;
        if (data.length < pagesize.value) {
          isDown.value = true;
        }
        return;
      }
      isDown.value = true;
      tip && ElMessage.error(msg);
    })
    .catch((err) => {
      ElMessage.error("请求失败，未知原因");
    });
};
onMounted(getList);
</script>

<style scoped>
.row {
  margin-bottom: 20px;
}
.txt {
  max-width: 100%;
  height: auto;
  min-height: 32px;
  line-height: 1.5715;
  vertical-align: bottom;
  transition: all 0.3s, height 0s;
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
}
.txt:focus {
  border-color: #40a9ff;
  border-right-width: 1px !important;
  outline: 0;
  box-shadow: 0 0 0 2px #1890ff33;
}

.btns {
  margin-top: 20px;
}
.btn {
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px #00000004;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: #000000d9;
  background: #fff;
  border-color: #d9d9d9;
  color: #fff;
  background: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px #0000000b;
}
.btn:active {
  outline: 0;
  box-shadow: none;
  color: #fff;
  background: #096dd9;
  border-color: #096dd9;
  text-decoration: none;
}
.btn:focus,
.btn:hover {
  color: #fff;
  background: #40a9ff;
  border-color: #40a9ff;
  text-decoration: none;
}
.rest {
  margin-left: 10px;
}
.title span {
  margin-left: 10px;
  font-size: 12px;
  color: #d9d9d9;
}
.title {
  color: #000;
}
.replay,.content {
  padding: 10px;
  white-space: pre-line;
  color: #00000073;
}
.btn.more {
  width: 100%;
}
.btn[disabled] {
  color: #00000040;
  background: #f5f5f5;
  border-color: #d9d9d9;
  text-shadow: none;
  box-shadow: none;
  cursor: not-allowed;
}
.replay{
   padding:0 15px 10px;
   color: red;
}
</style>
