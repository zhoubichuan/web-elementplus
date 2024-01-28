<template>
  <br />
  <web-space>
    <web-button>默认按钮</web-button>
    <web-button disabled>默认按钮禁用状态</web-button>
  </web-space>
  <br />
  <br />
  <web-space>
    <web-button type="success">type="success"按钮</web-button>
    <web-button type="success" disabled>type="success"按钮禁用状态</web-button>
  </web-space>
  <br />
  <br />
  <web-space>
    <web-button :icon="Edit">编辑按钮</web-button>
    <web-button :icon="Delete">删除按钮</web-button>
    <web-button :icon="Search">搜索按钮</web-button>
    <web-button :icon="Upload">上传按钮</web-button>
  </web-space>
  <br />
  <br />
  <web-space>
    <web-button size="large">大按钮</web-button>
    <web-button>中按钮</web-button>
    <web-button size="small">小按钮</web-button>
  </web-space>
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
