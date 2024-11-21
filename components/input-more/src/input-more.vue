<template>
  <div class="web-input-more">
    <div class="add">
      <el-button link @click="handleAdd">添加</el-button>
    </div>
    <web-input-more-child v-for="(item, index) in items" :key="index" :modelValue="item"
      @update:modelValue="handleChnage" @up="handleUp" @down="handleDown" @delete="handleDelete" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WebInputMoreChild from './input-more-child.vue';
const items = ref([''])
const handleAdd = () => {
  items.value.push('')
}
const handleChnage = () => {

}
const handleUp = () => {

}
const handleDown = () => {

}
const handleDelete = () => {

}
defineOptions({
  name: 'WebInputMore'
});

</script>
<style scoped lang="scss">
.web-input-more {
  width: 100%;
  .add{
    margin-left: 40px;
  }
}
</style>
