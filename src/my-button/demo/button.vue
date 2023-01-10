<template>
  <br />
  <my-space>
    <my-button>默认按钮</my-button>
    <my-button disabled>默认按钮禁用状态</my-button>
  </my-space>
  <br />
  <br />
  <my-space>
    <my-button type="success">type="success"按钮</my-button>
    <my-button type="success" disabled>type="success"按钮禁用状态</my-button>
  </my-space>
  <br />
  <br />
  <my-space>
    <my-button :icon="Edit">编辑按钮</my-button>
    <my-button :icon="Delete">删除按钮</my-button>
    <my-button :icon="Search">搜索按钮</my-button>
    <my-button :icon="Upload">上传按钮</my-button>
  </my-space>
  <br />
  <br />
  <my-space>
    <my-button size="large">大按钮</my-button>
    <my-button>中按钮</my-button>
    <my-button size="small">小按钮</my-button>
  </my-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Edit, Delete, Search, Upload } from '@element-plus/icons-vue'
const activeName = ref('first')

const handleClick = (tab: string, event: Event) => {
  console.log(tab, event)
}
</script>

<style lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
