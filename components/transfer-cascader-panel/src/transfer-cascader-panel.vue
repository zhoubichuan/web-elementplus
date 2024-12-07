<template>
  <template v-if="view">
    <web-cascader-panel
      v-if="nextSelect.length"
      v-model="nextSelect"
      :props="{ ...props, disabled: true }"
      :options="treeData2"
    />
  </template>
  <el-row v-else :gutter="20" class="transfer-cascader-panel">
    <el-col :span="12">
      <div class="select-part">
        <web-select-options
          v-model="formData.type"
          placeholder="请选择类型"
          style="width: 200px"
          :options="scenariosData"
          option-label="desc"
          @change="handleSelectChange"
        />
        <el-button class="add-btn" @click="handleAdd" :disabled="!preSelect.length">添加选择</el-button>
      </div>
      <div class="cascader-part">
        <web-cascader-panel getCheckedNodes :options="treeData" :props="props" v-model="preSelect" />
      </div>
    </el-col>
    <el-col :span="12">
      已选内容
      <el-button class="cancel-btn" @click="handleCancel" :disabled="!nextSelect.length">取消选中</el-button>
      <div class="cascader-part-disabled">
        <web-cascader-panel v-model="nextSelect" :props="{ ...props, disabled: true }" :options="treeData2" />
      </div>
    </el-col>
  </el-row>
</template>
<script setup lang="ts" name="WebTransferCascaderPanel">
import { ref, onBeforeMount, nextTick } from 'vue'
import WebSelectOptions from '../../select-options/index'
import WebCascaderPanel from '../../cascader-panel/index'
import { cloneDeep } from 'lodash'

const emits = defineEmits(['update:modelValue'])
const { view, editData, modelValue, requestSelect, requestTree, selectData, data } = defineProps({
  view: {
    type: Boolean,
    default: false
  },
  editData: {
    type: Array,
    default: () => []
  },
  data: {
    type: Array,
    default: () => []
  },
  selectData: {
    type: Array,
    default: () => []
  },
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
  type: String(modelValue[3]) || ''
})
const props = {
  multiple: true,
  expandTrigger: 'hover' as const,
  label: 'name',
  value: 'id'
}
const props2 = {
  expandTrigger: 'hover' as const,
  label: 'name',
  value: 'id'
}
const preSelect = ref(modelValue ? modelValue.slice(-1) : [])
const nextSelect = ref([])
const treeData2 = ref([])

const treeData = ref()
const getRequestTree = async params => {
  const result = await requestTree(params)
  treeData.value = result
}
const scenariosData = ref([])
const requestScenarios = async params => {
  const data = await requestSelect(params)
  scenariosData.value = data
  if (!formData.value.type) {
    formData.value.type = data[0].value
  }
  await getRequestTree({ sceneType: formData.value.type })
  if (editData.length === 3) {
    const arr = []
    for (let i = 0; i < treeData.value.length; i++) {
      const data2 = treeData.value[i]?.children
      if (data2) {
        for (let j = 0; j < data2.length; j++) {
          const data3 = data2[j]?.children
          if (data3) {
            for (let k = 0; k < data3.length; k++) {
              editData[2].includes([data3[k].id]) && arr.push([treeData.value[i].id, data2[j].id, data3[k].id])
            }
          } else {
            editData[1].includes([data2[j].id]) && arr.push([treeData.value[i].id, data2[j].id])
          }
        }
      } else {
        editData[0].includes([treeData.value[i].id]) && arr.push([treeData.value[i].id])
      }
    }
    nextTick(() => {
      preSelect.value = nextSelect.value = arr
      treeData2.value = treeData.value
    })
  }
}
onBeforeMount(async () => {
  await requestScenarios()
  if (selectData.length) {
    // preSelect.value = selectData
    handleAdd()
  }

  if (data.length) {
    const arr = []
    for (let i = 0; i < data.length; i++) {
      const data2 = data[i]?.children
      if (data2) {
        for (let j = 0; j < data2.length; j++) {
          const data3 = data2[j]?.children
          if (data3) {
            for (let k = 0; k < data3.length; k++) {
              arr.push([data[i].id, data2[j].id, data3[k].id])
            }
          } else {
            arr.push([data[i].id, data2[j].id])
          }
        }
      } else {
        arr.push([data[i].id])
      }
    }

    nextSelect.value = arr
    treeData2.value = data
  }
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
    .filter(childs => arr[0].includes(childs.id))
    .map(item => ({
      ...item,
      disabled: true,
      children: item.children
        .filter(childs => arr[1].includes(childs.id))
        .map(childItem => ({
          ...childItem,
          disabled: true,
          children: childItem.children.filter(c => arr[2].includes(c.id)).map(l => ({ ...l, disabled: true }))
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
})
</script>

<style lang="scss" scoped>
.transfer-cascader-panel {
  width: 100%;
}

.cascader-part {
  width: 100%;
  margin-top: 10px;
}

.add-btn {
  margin-left: 10px;
}

:deep(.el-cascader-menu) {
  min-width: 120px;
}

.cancel-btn {
  margin-left: 10px;
}

.cascader-part-disabled {
  margin-top: 10px;
  pointer-events: none;

  :deep(.el-checkbox__input.is-checked) {
    .el-checkbox__inner {
      display: none;
    }
  }
}
</style>
