<template>
  <web-dialog @reloadList="reloadData" v-bind="{
    ...$attrs, 'web-footer': true
  }" @handleCancel="close" @handleConfirm="handleSubmit">
    <web-form ref="formRef" :rules="rules" :model="formModel" label-width="80px">
      <template v-if="Number(formModel.type) == 0">
        <web-form-item v-for="(formItem, formItemIndex) in baseFormData" :formData="formItem" :key="formItemIndex" />
      </template>
      <template v-else>
        <web-form-item v-for="(formItem, formItemIndex) in baseFormData" :formData="formItem" :key="formItemIndex" />
      </template>
    </web-form>
  </web-dialog>
</template>

<script setup lang="ts">
import { ref, reactive, defineProps, watch, unref, defineEmits } from 'vue'
import { ElForm, ElMessage } from 'element-plus'
import WebFormItem from '../../form-item/index'

const { close, reloadFn, creteForm } = defineProps<{
  close: Function
  reloadFn: Function
  creteForm: any
}>()
// 查询参数
const formModel = reactive(reactive<Record<string, string | number | undefined>>({}))
const init = () => creteForm.forEach(child => {
  child.forEach(item => {
    if (item.prop) {
      formModel[item.prop] = item.init || ''
    }
  })
})
init()
const submit = () => {
  reloadFn(formModel)
}
const rules = {
  relatedId: [
    { required: true, message: '请输入sssdds/rtyrtyrt', trigger: 'blur' }
    // { type: 'number', max: 1000, message: "sssdds/rtyrtyrt为数字" }
  ],
  type: [{ required: true, message: '请选择关联项目', trigger: 'blur' }],
  image: [{ required: true, message: '请选择展示图', trigger: 'blur' }],
  count: [
    { required: true, message: '请输入铸造数量', trigger: 'blur' }
    // { type: 'number', max: 1000, message: "铸造数量为数字" }
  ],
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  remark: [{ required: true, message: '请输入说明', trigger: 'blur' }]
}
const modelTypes = ref<Array<IModelTypeItem>>([
  {
    value: '0',
    desc: 'sssdds'
  },
  {
    value: '1',
    desc: 'sdqewqwe'
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
const dialogTitle = ref('创建')
const formRef = ref<InstanceType<typeof ElForm>>()
const emit = defineEmits(['reloadList', 'update:modelValue'])

const typeChange = (val: any) => {
  if (val === 0) {
    // formData.value = initFormData
  } else {
    // formData.value = initFormData2
  }
}
const handleSubmit = () => {
  formRef.value?.validate(async (valid: any) => {
    if (valid) {
      let params: any = { ...formModel }
      params.type = Number(params.type)
      const { c } = await submit(formModel)
      if (c == 200) {
        ElMessage.success(dialogTitle.value + '成功')
        emit('reloadList')
        close()
      }
    }
  })
}
// const baseFormData = [
//   [
//     {
//       prop: 'type',
//       label: '类型',
//       type: 'select',
//       component: {
//         placeholder: '请选择类型',
//         onChange: typeChange,
//         disabled: true,
//         options: modelTypes.value.map(item => ({ label: item.desc, value: String(item.value) }))
//       }
//     },
//     {}
//   ],
//   [
//     {
//       prop: 'relatedId',
//       label: 'xxx',
//       component: {
//         placeholder: '请输入sssddsid'
//       }
//     },
//     {}
//   ],
//   [
//     {
//       prop: 'name',
//       label: '名称',
//       component: {
//         placeholder: '请输入名称'
//       }
//     },
//     {
//       prop: 'count',
//       label: 'saddd',
//       component: {
//         placeholder: '请输入ss'
//       }
//     }
//   ],
//   [
//     {
//       prop: 'remark',
//       label: '说明',
//       type: 'web-rich',
//       component: {
//         menus: [
//           'head',
//           'bold',
//           'fontSize',
//           // 'fontName',
//           // 'italic',
//           // 'underline',
//           // 'strikeThrough',
//           // 'indent',
//           // 'lineHeight',
//           // 'foreColor',
//           // 'backColor',
//           // 'link',
//           'list',
//           // 'todo',
//           // 'justify',
//           // 'quote',
//           // 'emoticon',
//           'image'
//           // 'video',
//           // 'table',
//           // 'code',
//           // 'splitLine',
//           // 'undo',
//           // 'redo',
//         ],
//         style: 'width: 100%'
//       }
//     }
//   ]
// ]
// const baseFormData2 = [
//   [
//     {
//       prop: 'type',
//       label: '类型',
//       render: modelTypes.value.find(i => i.value == String(formData.value.type))?.desc
//     }
//   ],
//   [
//     {
//       prop: 'relatedId',
//       label: 'sdqewqwe',
//       render: formData.value.relatedId
//     }
//   ],
//   [
//     {
//       prop: 'image',
//       label: '图片',
//       render: formData.value.image
//     }
//   ],
//   [
//     {
//       prop: 'remark',
//       label: '说明',
//       component: {
//         is: 'web-rich',
//         modelValue: formData.value.remark,
//         'onUpdate:modelValue': (value: string) => (formData.value.remark = value),
//         menus: [
//           'head',
//           'bold',
//           'fontSize',
//           // 'fontName',
//           // 'italic',
//           // 'underline',
//           // 'strikeThrough',
//           // 'indent',
//           // 'lineHeight',
//           // 'foreColor',
//           // 'backColor',
//           // 'link',
//           'list',
//           // 'todo',
//           // 'justify',
//           // 'quote',
//           // 'emoticon',
//           'image'
//           // 'video',
//           // 'table',
//           // 'code',
//           // 'splitLine',
//           // 'undo',
//           // 'redo',
//         ],
//         style: 'width: 100%'
//       }
//     }
//   ]
// ]
</script>
<script lang='ts'>
export default {
  name: "WebFormSubmit"
}
</script>
<style>
.el-cascader-menu__wrap {
  .el-cascader-node {
    padding: 0 !important;
  }
}
</style>
