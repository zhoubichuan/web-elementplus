<template>
  <web-dialog
    mold="view"
    size="big"
    title="查看"
    v-model="dialogShow"
    v-bind="{ ...$attrs }"
    @handleCancel="handleClose"
    @handleConfirm="handleSubmit"
  >
    <web-form-create ref="modelRef" v-if="isModel" @handleChange="handleChange" :formData="baseFormData" />
    <web-form-create ref="propertyRef" v-else @handleChange="handleChange" :formData="baseFormData2" />
  </web-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { DetailApi, PropertyDetailApi, getNftTree, getNftScenarios } from '@/api/index'
import WebDialog from 'web-components/dialog/index'
import WebFormCreate from 'web-components/form-create/index'
import type { FormData } from 'web-components/form-create/type'
const baseFormData = ref<FormData>([])
const baseFormData2 = ref<FormData>([])
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

const singleView = async (params: Record<string, any>) => {
  params.projectType = +params.projectType
  let requestFn = DetailApi
  if (params.projectType === 2) {
    requestFn = PropertyDetailApi
  }
  const { d, m } = await requestFn({ id: params.id })
  const {
    id,
    modelId,
    projectType,
    name,
    ntfNum,
    description,
    showPic,
    cityIds,
    routeIds,
    mediaLocationIds,
    assetSceneType
  } = d
  if (String(projectType) === '1') {
    isModel.value = true
    baseFormData.value = [
      [
        {
          prop: 'projectType',
          label: '关联项目',
          init: '模型',
          type: 'div'
        },
        {}
      ],
      [
        {
          prop: 'modelId',
          label: '服装id',
          type: 'div',
          init: modelId
        },
        {}
      ],
      [
        {
          prop: 'name',
          label: '名称',
          type: 'div',
          init: name
        },
        {
          prop: 'ntfNum',
          label: '铸造数量',
          type: 'div',
          init: ntfNum
        }
      ],
      [
        {
          prop: 'description',
          label: '说明',
          type: 'div',
          init: description
        }
      ]
    ]
  } else {
    isModel.value = false
    baseFormData2.value = [
      [
        {
          prop: 'projectType',
          label: '关联项目',
          init: '资产',
          type: 'div'
        },
        {}
      ],
      [
        {
          prop: 'relatedId',
          label: '资产',
          type: 'cascader-panel',
          init: [
            cityIds?.split(',') || [],
            routeIds?.split(',') || [],
            mediaLocationIds?.split(',') || [],
            assetSceneType
          ],
          component: {
            props: {
              label: 'name',
              value: 'id'
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
            view: true
          }
        }
      ],
      [
        {
          prop: 'showPic',
          label: '展示图',
          init: showPic || '',
          type: 'select-image',
          component: {
            options: [
              {
                value: 'https://zhoubichuan.com/meta/1.png',
                label: '默认选项'
              }
            ],
            view: true,
            placeholder: '请输入模型id',
            imageSrc: showPic
          }
        },
        {}
      ],
      [
        {
          prop: 'description',
          label: '说明',
          type: 'div',
          init: description
        }
      ]
    ]
  }

  dialogShow.value = true
}
defineExpose({
  singleView
})
</script>
