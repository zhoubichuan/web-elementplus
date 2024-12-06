<template>
  <web-dialog
    mold="create"
    size="big"
    title="创建"
    v-model="dialogShow"
    @handleCancel="handleClose"
    @handleConfirm="handleSubmit"
  >
    <web-form-create
      ref="modelRef"
      v-if="isModel"
      :request="requestCreate"
      @handleChange="handleChange"
      :formData="formData"
      :rules="modelRules"
    />
    <web-form-create
      ref="propertyRef"
      v-else
      :request="requestCreate"
      @handleChange="handleChange"
      :formData="baseFormData2"
      :rules="propertyRules"
    />
  </web-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { CreateApi, PropertyCreateApi, getModels, getNftTree, getNftScenarios } from '@/api/index'
import { NftCreateType } from './type.d'
import WebDialog from 'web-components/dialog/index'
import WebFormCreate from 'web-components/form-create/index'
import type { FormData } from 'web-components/form-create/type'
import { rules as modelRules } from './config/model.config'
import { rules as propertyRules } from './config/property.config'
const modelRef = ref<InstanceType<typeof WebFormCreate>>()
const propertyRef = ref<InstanceType<typeof WebFormCreate>>()
//弹框
const dialogShow = ref(false)
const handleClose = () => {
  dialogShow.value = false
}
const isModel = ref(true)

const emit = defineEmits(['reloadList'])
const handleChange = (val: any) => {
  if (val === '1') {
    isModel.value = true
  } else {
    isModel.value = false
  }
}
const handleSubmit = () => {
  if (isModel.value) {
    modelRef.value?.validate()
  } else {
    propertyRef.value?.validate()
  }
}
const requestCreate = async (params: NftCreateType.RequestParams) => {
  params.projectType = +params.projectType
  let requestFn = CreateApi
  if (params.projectType === 2) {
    params.assetSceneType = params.relatedId[3]
    params.cityIds = params.relatedId[0].join(',')
    params.routeIds = params.relatedId[1].join(',')
    params.mediaLocationIds = params.relatedId[2].join(',')
    delete params.relatedId
    requestFn = PropertyCreateApi
  }
  const { c } = await requestFn(params)
  if (c == 200) {
    ElMessage.success('创建成功')
    emit('reloadList')
    dialogShow.value = false
  }
}
defineExpose({
  // 表单创建
  handleCreate: () => {
    dialogShow.value = true
  }
})
const modelTypes = [
  {
    value: '1',
    label: '模型'
  },
  {
    value: '2',
    label: '资产'
  }
]
const formData: FormData[] = [
  [
    {
      prop: 'projectType',
      label: '关联项目',
      init: '1',
      type: 'select',
      component: {
        placeholder: '请选择类型',
        onChange: handleChange,
        request: () => modelTypes
      }
    },
    {}
  ],
  [
    {
      prop: 'modelId',
      label: '服装id',
      type: 'input',
      component: {
        placeholder: '请输入服装id'
      }
    },
    {}
  ],
  [
    {
      prop: 'name',
      label: '名称',
      type: 'input',
      component: {
        placeholder: '请输入名称'
      }
    },
    {
      prop: 'ntfNum',
      label: '铸造数量',
      type: 'input',
      component: {
        placeholder: '请输入铸造数量'
      }
    }
  ],
  [
    {
      prop: 'description',
      label: '说明',
      type: 'rich',
      component: {
        style: 'width: 100%'
      }
    }
  ]
]
const baseFormData2: FormData[] = [
  [
    {
      prop: 'projectType',
      label: '关联项目',
      init: '2',
      type: 'select',
      component: {
        placeholder: '请选择类型',
        onChange: handleChange,
        request: () => modelTypes
      }
    },
    {}
  ],
  [
    {
      prop: 'relatedId',
      label: '资产',
      init: [, , , 0],
      type: 'transfer-cascader-panel',
      component: {
        onChange: (value: string) => {
          // formData.value.relatedId = value
        },
        requestSelect: async () => {
          const { c, d } = await getNftScenarios()
          if (c == 200) {
            const data = d.reverse()
            return data
          } else {
            return []
          }
        },
        requestTree: async params => {
          const {
            c,
            d: { result }
          } = await getNftTree(params)
          if (c == 200) {
            return result
          } else {
            return []
          }
        },
        placeholder: '请输入模型id'
      }
    }
  ],
  [
    {
      prop: 'showPic',
      label: '展示图',
      init: 'https://zhoubichuan.com/meta/1.png',
      type: 'select-image',
      component: {
        request: async () => {
          const {
            c,
            d: { result }
          } = await getModels({ modelApplyType: 2 })
          if (c == 200) {
            return result
          } else {
            return []
          }
        },
        options: [
          {
            value: 'https://zhoubichuan.com/meta/1.png',
            label: '默认选项'
          }
        ],
        placeholder: '请输入模型id',
        imageSrc: 'https://zhoubichuan.com/meta/1.png'
      }
    },
    {}
  ],
  [
    {
      prop: 'description',
      label: '说明',
      type: 'rich',
      component: {
        style: 'width: 100%'
      }
    }
  ]
]
</script>
