<template>
  <div>
    <!-- 搜索部分 -->
    <form-search @create="viewCreate?.handleCreate" @search="tableRef?.reloadData" />
    <!-- 表格区域 -->
    <table-show ref="tableRef" @view="viewRef?.singleView" @edit="viewEdit?.singleEdit" />
    <!-- 创建部分 -->
    <dialog-create ref="viewCreate" @reloadList="tableRef?.reloadData" />
    <!-- 编辑部分 -->
    <dialog-edit ref="viewEdit" @reloadList="tableRef?.reloadData" />
    <!-- 查看部分 -->
    <dialog-view ref="viewRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import formSearch from './form-search.vue'
import tableShow from './table-show.vue'
import dialogCreate from './dialog-create.vue'
import dialogEdit from './dialog-edit.vue'
import dialogView from './dialog-view.vue'
const tableRef = ref<InstanceType<typeof tableShow>>()
const viewCreate = ref<InstanceType<typeof dialogCreate>>()
const viewEdit = ref<InstanceType<typeof dialogEdit>>()
const viewRef = ref<InstanceType<typeof dialogView>>()
</script>
