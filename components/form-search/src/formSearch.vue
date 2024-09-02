<template>
  <el-card class="page-search" style="margin-top: 10px">
    <web-form size="small" ref="searchInfoRef" :model="model" label-width="120px">
      <template v-if="searchForm.length">
        <web-form-item
          v-for="(formItem, formItemIndex) in searchForm"
          :formData="formItem"
          :key="formItemIndex"
          label-width="60px"
        />
      </template>
      <el-row>
        <!-- 查询 重置按钮 -->
        <el-col :offset="searchForm.length ? 1 : 0" :span="200" style="width: 100%">
          <el-button @click="formCreate" size="mini" type="success">
            <slot> 创建 </slot>
          </el-button>
          <div v-if="searchForm.length" style="float: right">
            <el-button :icon="Refresh" @click="resetSearchForm" size="mini">重置</el-button>
            <el-button :icon="Search" @click="handlerSearch" size="mini" type="primary">查询</el-button>
          </div>
        </el-col>
      </el-row>
    </web-form>
  </el-card>
</template>

<script setup lang="ts" name="WebFormSearch">
import { reactive } from 'vue'
import { Refresh, Search } from '@element-plus/icons-vue'
const { formCreate, searchForm, reloadFn,model } = defineProps<{
  formCreate: Function
  searchForm: any
  reloadFn: Function
  model:Object
}>()
// 查询参数
const getTopicParam = reactive<Record<string, string | number | undefined>>({
  currentPage: 1,
  pageSize: 20,
  name: '',
  creatorName: '',
  spuid: '',
  startTime: ''
})
const handlerSearch = () => {
  reloadFn()
}
const resetSearchForm = () => {
  Object.keys(getTopicParam).forEach(key => {
    getTopicParam[key] = ''
  })
  reloadFn()
}
</script>
<script lang='ts'>
export default {
  name: "WebFormSearch"
}
</script>
<style lang="scss" scoped></style>
