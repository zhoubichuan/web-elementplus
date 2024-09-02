<template>
  <el-card style="margin-top: 10px">
    <!-- 表格展示区域 -->
    <div class="header">
      <div class="title">
        <span v-if="tableConfig?.title"></span>
        <h5>{{ tableConfig?.title }}</h5>
      </div>
      <el-button v-if="tableConfig?.needCreate !== false ?? true" @click="createItem" type="primary"
        >新建{{ tableConfig.title?.slice(0, 2) }}</el-button
      >
    </div>
    <el-table
      ref="tableRef"
      @selection-change="handleSelectionChange"
      :data="tableData"
      border
      style="width: 100%"
      stripe
    >
      <template #empty>
        <el-empty :image-size="200" description="暂无数据" />
      </template>
      <el-table-column v-if="tableConfig.hasSelection" type="selection" width="55" />
      <template v-for="item in tableConfig.tableItems" :key="item.label">
        <el-table-column v-bind="item" :prop="item.prop" :label="item.label" :width="item?.width">
          <template #default="scope">
            <slot
              :name="item.prop"
              :row="scope.row"
              >{{item._options?item._options.find( (i:any) =>i.value==scope.row[item.prop]).label: scope.row[item.prop] }}</slot
            >
          </template>
        </el-table-column>
      </template>

      <el-table-column v-if="tableConfig.isEdit" label="操作" :width="tableConfig.editWidth ?? '100'" fixed="right">
        <template v-slot="scope">
          <slot name="handler" :row="scope.row">
            <div>
              <el-button type="primary" size="small" link @click="editMenu(scope.row)">修改</el-button>
              <el-button type="danger" @click="deleteMenu(scope.row.id)" size="small" link>删除</el-button>
            </div>
          </slot>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页区域 -->
    <div class="footer" v-if="tablePageInfo && tableData.length !== 0">
      <el-pagination
        background
        v-model:currentPage="tablePageInfo.currentPage"
        v-model:page-size="tablePageInfo.pageSize"
        :hide-on-single-page="true"
        :page-sizes="[20, 50, 100, 200]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tablePageInfo.totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </el-card>
</template>

<script setup lang="ts" name="WebTable">
import { ElTable } from 'element-plus'
import { ref, watch } from 'vue'
const props = defineProps<{
  tableConfig: any
  tableData: Array<{ [key: string]: any }>
  pageInfo: IPageInfo
}>()

const tablePageInfo = ref<any>()

watch(
  () => ({ ...props.pageInfo }),
  newPageInfo => {
    console.log(newPageInfo)
    tablePageInfo.value = { ...newPageInfo }
  },
  {
    immediate: true
  }
)


const emit = defineEmits(['toEdit', 'toDelete', 'toCreate', 'changePageSize', 'changeCurrentPage', 'selectChange'])
const handleSelectionChange = (val: any) => {
  emit('selectChange', val)
}
const editMenu = (data: any) => {
  emit('toEdit', data)
}
const deleteMenu = (id: number) => {
      emit('toDelete', id)
}
const createItem = () => {
  const emptyObj = { ...props.tableData[0] }
  Object.keys(emptyObj).forEach(key => {
    emptyObj[key] = ''
  })

  emit('toCreate', emptyObj)
}

const handleSizeChange = (pageSize: number) => {
  emit('changePageSize', { ...tablePageInfo.value, pageSize })
}
const handleCurrentChange = (currentPage: number) => {
  emit('changeCurrentPage', { ...tablePageInfo.value, currentPage })
}

const tableRef = ref<InstanceType<typeof ElTable>>()
const clearSelection = () => {
  tableRef.value?.clearSelection()
}
defineExpose({
  clearSelection
})
</script>
<script lang='ts'>
export default {
  name: "WebTable"
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;

  .title {
    display: flex;
    justify-content: space-around;

    span {
      width: 1px;
      height: 14px;
      background-color: var(--el-color-primary);
      border: 1px solid var(--el-color-primary);
    }

    h5 {
      margin: 0;
      padding-bottom: -5px;
      padding-left: 20px;
      font-size: 14px;
    }
  }
}

.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}
</style>
