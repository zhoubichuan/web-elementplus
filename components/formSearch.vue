<template>
  <el-card class="page-search" style="margin-top: 10px">
    <el-form ref="searchInfoRef" v-bind="$attrs" label-width="120px">
      <template v-if="searchForm.length">
        <web-form-item
          v-for="(formItem, formItemIndex) in searchForm"
          :formData="formItem"
          :key="formItemIndex"
          label-width="70px"
        />
      </template>
      <el-row>
        <!-- 查询 重置按钮 -->
        <el-col :offset="searchForm.length ? 1 : 0" :span="200" style="width: 100%">
          <el-button @click="formCreate" size="mini" type="success">
            <slot> 创建 </slot>
          </el-button>
          <div v-if="searchForm.length" style="float: right">
            <el-button :icon="Refresh" @click="handleReset" size="mini">重置</el-button>
            <el-button :icon="Search" @click="handlerSearch" size="mini" type="primary">查询</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { Refresh, Search } from '@element-plus/icons-vue'
import { ElForm } from 'element-plus'
import WebFormItem from './formItem.vue'
const { formCreate, searchForm, reloadFn } = defineProps({
  formCreate: {
    type: Function,
    default: () => {}
  },
  searchForm: {
    type: Array as () => Record<string, any>[],
    default: () => []
  },
  reloadFn: {
    type: Function,
    default: (params?: string) => {}
  }
})

const handlerSearch = () => {
  reloadFn()
}
const handleReset = () => {
  reloadFn('reset')
}
</script>
<style lang="scss" scoped></style>
