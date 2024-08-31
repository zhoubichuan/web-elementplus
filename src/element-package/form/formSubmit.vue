<template>
  <web-dialog @reloadList="reloadData" v-model="show" v-bind="{
    title: !create ? '编辑NFT' : '创建NFT', close: handleClose,
    initData: currentRowData, 'web-footer': true
  }" @handleCancel="close" @handleConfirm="handleSubmit">
    <el-form ref="formRef" :rules="rules" :model="formData" label-width="80px">
      <template v-if="Number(formData.type) == 0">
        <web-form-item v-for="(formItem, formItemIndex) in baseFormData" :formData="formItem" :key="formItemIndex" />
      </template>
      <template v-else>
        <web-form-item v-for="(formItem, formItemIndex) in baseFormData2" :formData="formItem" :key="formItemIndex" />
      </template>
    </el-form>
  </web-dialog>
  <web-button @click="handleCreate">创建</web-button>
  <web-button @click="handleEdit">编辑</web-button>
</template>

<script setup lang="ts">
import { ref, toRefs, defineProps, watch, unref, defineEmits } from 'vue'
import { ElForm, ElMessage } from 'element-plus'
const props = defineProps<{ close: () => void; initData: any | undefined }>()
const { close } = toRefs(props)
const show = ref(false)
const create = ref(false)
const edit = ref(false)
const currentRowData = ref<any>({
  relatedId: '',
  type: '0',
  count: '',
  name: '',
  remark: ''
})
const handleClose = () => {
  show.value = false
  create.value = false
}
const handleCreate = () => {
  show.value = true
  create.value = true
}
const handleEdit = () => {
  show.value = true
  edit.value = true
}
const submit = () => {

}
const rules = {
  relatedId: [
    { required: true, message: '请输入模型/资产id', trigger: 'blur' }
    // { type: 'number', max: 1000, message: "模型/资产id为数字" }
  ],
  type: [{ required: true, message: '请选择关联项目', trigger: 'blur' }],
  image: [{ required: true, message: '请选择展示图', trigger: 'blur' }],
  count: [
    { required: true, message: '请输入铸造数量', trigger: 'blur' }
    // { type: 'number', max: 1000, message: "铸造数量为数字" }
  ],
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  remark: [{ required: true, message: '请输入NFT说明', trigger: 'blur' }]
}
const modelTypes = ref<Array<IModelTypeItem>>([
  {
    value: '0',
    desc: '模型'
  },
  {
    value: '1',
    desc: '资产'
  }
])
const initFormData: any = {
  relatedId: '',
  type: '0',
  count: '',
  name: '',
  remark: ''
}
const initFormData2: any = {
  relatedId: '1',
  type: '1',
  remark: '',
  image: ''
}
const dialogTitle = ref('创建NFT')
const formRef = ref<InstanceType<typeof ElForm>>()
const formData = ref<any>(props.initData ? props.initData : initFormData)
const emit = defineEmits(['reloadList', 'update:modelValue'])
watch(
  () => props.initData,
  (val: any | undefined) => {
    if (val === unref(formData.value)) return
    formData.value = val ? val : initFormData
  }
)
const typeChange = (val: any) => {
  if (val === 0) {
    formData.value = initFormData
  } else {
    formData.value = initFormData2
  }
}
const handleSubmit = () => {
  formRef.value?.validate(async (valid: any) => {
    if (valid) {
      let params: any = { ...formData.value }
      params.type = Number(params.type)
      const { c } = await submit(params)
      if (c == 200) {
        ElMessage.success(dialogTitle.value + '成功')
        emit('reloadList')
        props.close()
      }
    }
  })
}
const baseFormData = [
  [
    {
      prop: 'type',
      label: '关联项目',
      component: {
        modelValue: formData.value.type,
        'onUpdate:modelValue': (value: string) => (formData.value.type = value),
        placeholder: '请选择类型',
        onChange: typeChange,
        disabled: true,
        options: modelTypes.value.map(item => ({ label: item.desc, value: String(item.value) }))
      }
    },
    {}
  ],
  [
    {
      prop: 'relatedId',
      label: '模型id',
      component:{
        modelValue: formData.value.relatedId,
          'onUpdate:modelValue': (value: string) => (formData.value.relatedId = value),
          placeholder: '请输入模型id'
      }
    },
    {}
  ],
  [
    {
      prop: 'name',
      label: '名称',
      component:{
        modelValue: formData.value.name,
          'onUpdate:modelValue': (value: string) => (formData.value.name = value),
          placeholder: '请输入名称'
      }
    },
    {
      prop: 'count',
      label: '铸造数量',
      component:{
        modelValue: formData.value.count,
          'onUpdate:modelValue': (value: string) => (formData.value.count = value),
          placeholder: '请输入铸造数量'
      }
    }
  ],
  [
    {
      prop: 'remark',
      label: 'NFT说明',
      component:{
        is:'web-rich',
        modelValue: formData.value.remark,
          'onUpdate:modelValue': (value: string) => (formData.value.remark = value),
          menus: [
            'head',
            'bold',
            'fontSize',
            // 'fontName',
            // 'italic',
            // 'underline',
            // 'strikeThrough',
            // 'indent',
            // 'lineHeight',
            // 'foreColor',
            // 'backColor',
            // 'link',
            'list',
            // 'todo',
            // 'justify',
            // 'quote',
            // 'emoticon',
            'image'
            // 'video',
            // 'table',
            // 'code',
            // 'splitLine',
            // 'undo',
            // 'redo',
          ],
          style: 'width: 100%'
      }
    }
  ]
]
const baseFormData2 = [
  [
    {
      prop: 'type',
      label: '关联项目',
      render: modelTypes.value.find(i => i.value == String(formData.value.type))?.desc
    }
  ],
  [
    {
      prop: 'relatedId',
      label: '资产',
      render: formData.value.relatedId
    }
  ],
  [
    {
      prop: 'image',
      label: '展示图',
      render: formData.value.image
    }
  ],
  [
    {
      prop: 'remark',
      label: 'NFT说明',
      component:{
        is:'web-rich',
        modelValue: formData.value.remark,
          'onUpdate:modelValue': (value: string) => (formData.value.remark = value),
          menus: [
            'head',
            'bold',
            'fontSize',
            // 'fontName',
            // 'italic',
            // 'underline',
            // 'strikeThrough',
            // 'indent',
            // 'lineHeight',
            // 'foreColor',
            // 'backColor',
            // 'link',
            'list',
            // 'todo',
            // 'justify',
            // 'quote',
            // 'emoticon',
            'image'
            // 'video',
            // 'table',
            // 'code',
            // 'splitLine',
            // 'undo',
            // 'redo',
          ],
          style: 'width: 100%'
      }
    }
  ]
]
</script>

<style>
.el-cascader-menu__wrap {
  .el-cascader-node {
    padding: 0 !important;
  }
}
</style>
