<template>
  <el-row :gutter="20" class="transfer-cascader-panel">
    <el-col :span="12">
      <div class="select-part">
        <web-select-options v-model="formData.type" placeholder="请选择类型" style="width: 200px" :options="scenariosData"
          option-label="desc" @change="handleSelectChange" />
        <el-button @click="handleAdd" :disabled="!preSelect.length">添加选择</el-button>
      </div>
      <div class="cascader-part">
        <web-cascader-panel getCheckedNodes :options="treeData" :props="props" v-model="preSelect" />
      </div>
    </el-col>
    <el-col :span="12">
      已选内容
      <el-button @click="handleCancel" :disabled="!nextSelect.length">取消选中</el-button>
      <div class="cascader-part-disabled">
        <web-cascader-panel v-model="nextSelect" :props="{ ...props, disabled: true }" :options="treeData2" />
      </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { reactive, ref, toRefs, onBeforeMount } from 'vue'
import WebSelectOptions from '../../select-options/index'
import WebCascaderPanel from '../../cascader-panel/index'
import { getNftTree, getNftScenarios } from '@/api/nft'
import { cloneDeep } from 'lodash'

const emits = defineEmits(['update:modelValue'])
const { modelValue, requestSelect, requestTree } = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  requestSelect: {
    type: Function,
    default: () => []
  },
  requestTree: {
    type: Function,
    default: () => []
  }
})
const formData = ref<any>({
  type: modelValue[3] || '',
})
const props = {
  multiple: true,
  expandTrigger: 'hover' as const,
  label: 'name',
  value: 'id'
}
const preSelect = ref(modelValue ? modelValue.slice(-1) : [])
const nextSelect = ref([])
const treeData2 = ref([])

const treeData = ref()
const getRequestTree = async (params) => {
  const result = await requestTree(params)
  treeData.value = result
}
const scenariosData = ref([])
const requestScenarios = async (params) => {
  const data = await requestSelect(params)
  scenariosData.value = data
  formData.value.type = data[0].value
  getRequestTree({ sceneType: data[0].value })
}
onBeforeMount(() => {
  requestScenarios()
})
const handleSelectChange = (id: string) => {
  getRequestTree({ sceneType: id })
}
const handleAdd = () => {
  nextSelect.value = preSelect.value
  const arr = [[], [], [], formData.value.type]
  for (let i = 0; i < preSelect.value.length; i++) {
    const [a, b, c] = preSelect.value[i]
    if (a && !arr[0].includes(a)) {
      arr[0].push(a)
    }
    if (b && !arr[0].includes(b)) {
      arr[1].push(b)
    }
    if (c && !arr[0].includes(c)) {
      arr[2].push(c)
    }
  }
  treeData2.value = cloneDeep(treeData.value)
    .filter((childs) => arr[0].includes(childs.id))
    .map(item => ({
      ...item, disabled: true, children:
        item.children.filter((childs) => arr[1].includes(childs.id))
          .map(childItem => ({
            ...childItem, disabled: true, children:
              childItem.children.filter((c) => arr[2].includes(c.id))
                .map(l => ({ ...l, disabled: true, }))
          }))
    }))
  emits('update:modelValue', arr)
}
const handleCancel = () => {
  nextSelect.value = []
  preSelect.value = []
  emits('update:modelValue', [[], [], [], formData.value.type])
}


defineOptions({
  name: 'WebTransferCascaderPanel'
});
</script>
<style lang="scss" scoped>
.transfer-cascader-panel {
  width: 100%;
}

.cascader-part {
  width: 100%;
}

:deep(.el-cascader-menu) {
  min-width: 120px;
}

.cascader-part-disabled {
  pointer-events: none;

  :deep(.el-checkbox__inner) {}
}
</style>
