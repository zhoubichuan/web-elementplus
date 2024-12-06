<template>
  <web-dialog
    mold="edit"
    size="big"
    title="编辑"
    v-model="dialogShow"
    @handleCancel="handleClose"
    @handleConfirm="handleSubmit"
  >
    <web-form-create
      ref="modelRef"
      v-if="isModel"
      :request="requestCreate"
      :formData="baseFormData"
      :rules="modelRules"
    />
    <web-form-create
      ref="propertyRef"
      v-else
      :request="requestCreate"
      :formData="baseFormData2"
      :rules="propertyRules"
    />
  </web-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import {
  DetailApi,
  PropertyDetailApi,
  PropertyEditApi,
  EditApi,
  getNftTree,
  getNftScenarios
} from '@/api/index'
import { NftEditType } from './type.d'
import WebDialog from 'web-components/dialog/index'
import WebFormCreate from 'web-components/form-create/index'
import type { FormData } from 'web-components/form-create/type'
import { rules as modelRules } from './config/model.config'
import { rules as propertyRules } from './config/property.config'
const idValue = ref<string>()
const baseFormData = ref<FormData[]>([])
const baseFormData2 = ref<FormData[]>([])
const modelRef = ref<InstanceType<typeof WebFormCreate>>()
const propertyRef = ref<InstanceType<typeof WebFormCreate>>()
//弹框
const dialogShow = ref(false)
const handleClose = () => {
  dialogShow.value = false
}
const isModel = ref(true)
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
const emit = defineEmits(['reloadList'])
const handleSubmit = () => {
  if (isModel.value) {
    modelRef.value?.validate()
  } else {
    propertyRef.value?.validate()
  }
}
const requestCreate = async (params: NftEditType.RequestParams) => {
  params.projectType = String(params.projectType)
  let requestFn = EditApi
  if (params.projectType === '2') {
    params.assetSceneType = params.relatedId[3]
    params.cityIds = params.relatedId[0].join(',')
    params.routeIds = params.relatedId[1].join(',')
    params.mediaLocationIds = params.relatedId[2].join(',')
    delete params.relatedId
    requestFn = PropertyEditApi
  }
  params.id = idValue.value as string
  const { c, m } = await requestFn(params)
  if (c == 200) {
    ElMessage.success('编辑成功')
    emit('reloadList')
    dialogShow.value = false
  } else {
    ElMessage.error(m)
  }
}
const singleEdit = async (params: Record<string, any>) => {
  params.projectType = +params.projectType
  let requestFn = DetailApi
  if (params.projectType === 2) {
    requestFn = PropertyDetailApi
  }
  const { d, m } = await requestFn({ id: params.id })
  const { id, modelId, projectType, name, ntfNum, description, showPic, assetSceneType, tree } = d
  const arr = []

  if (tree && tree.result) {
    const result = tree.result
    for (let i = 0; i < result.length; i++) {
      const data2 = result[i]?.children
      const a = result[i].id
      if (data2) {
        for (let j = 0; j < data2.length; j++) {
          const data3 = data2[j]?.children
          const b = data2[j].id
          if (data3) {
            for (let k = 0; k < data3.length; k++) {
              const c = data3[k].id
              data3[k].selected && arr.push([a, b, c])
            }
          } else {
            data2[j].selected && arr.push([a, b])
          }
        }
      } else {
        result[i].selected && arr.push([a])
      }
    }
  }
  idValue.value = id
  if (String(projectType) === '1') {
    isModel.value = true
    baseFormData.value = [
      [
        {
          prop: 'projectType',
          label: '关联项目',
          init: String(projectType),
          type: 'select',
          component: {
            placeholder: '请选择类型',
            disabled: true,
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
          init: modelId,
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
          init: name,
          component: {
            placeholder: '请输入名称'
          }
        },
        {
          prop: 'ntfNum',
          label: '铸造数量',
          type: 'input',
          init: ntfNum,
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
          init: description,
          component: {
            style: 'width: 100%'
          }
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
          init: String(projectType),
          type: 'select',
          component: {
            disabled: true,
            placeholder: '请选择类型',
            request: () => modelTypes
          }
        },
        {}
      ],
      [
        {
          prop: 'relatedId',
          label: '资产',
          init: [[], [], [], assetSceneType],
          type: 'transfer-cascader-panel',
          component: {
            selectData: arr,
            data: tree?.result || [],
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
          init: showPic || '',
          type: 'select-image',
          component: {
            options: [
              {
                value: 'https://zhoubichuan.com/meta/1.png',
                label: '默认选项'
              }
            ],
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
          type: 'rich',
          init: description,
          component: {
            style: 'width: 100%'
          }
        }
      ]
    ]
  }

  dialogShow.value = true
}
defineExpose({
  singleEdit
})
</script>
