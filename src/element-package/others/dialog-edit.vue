<template>
  <web-dialog-create :rules="rules" :size="size" title="编辑xx" v-model="show" :close="handleClose"
    @reloadList="reloadData" :creteForm="formData" :request="handleRequest" />
  <web-button @click="handleCreate('big')">编辑大尺寸</web-button>
  <web-button @click="handleCreate('middle')">编辑中尺寸</web-button>
  <web-button @click="handleCreate('small')">编辑小尺寸</web-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
const create = ref(false)
const size = ref('')
const handleCreate = (s) => {
  size.value = s
  show.value = true
  create.value = true
}
const handleClose = () => {
  show.value = false
  create.value = false
}
const handleRequest = (val) => {
}
const typeChange = (val: any) => {
  if (val === 1) {
    formData.value = baseFormData
  } else {
    formData.value = baseFormData2
  }
}
const rules = {
  relatedId: [
    { required: true, message: '请输入sssdds/rtyrtyrt', trigger: 'blur' }
    // { type: 'number', max: 1000, message: "sssdds/rtyrtyrt为数字" }
  ],
  type: [{ required: true, message: '请选择asdfasdf', trigger: 'blur' }],
  image: [{ required: true, message: '请选择展示图', trigger: 'blur' }],
  count: [
    { required: true, message: '请输入数量', trigger: 'blur' }
    // { type: 'number', max: 1000, message: "数量为数字" }
  ],
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  remark: [{ required: true, message: '请输入说明', trigger: 'blur' }]
}
const baseFormData = [
  [
    {
      prop: 'type',
      label: '类型',
      type: 'select',
      init: 1,
      component: {
        placeholder: '请选择类型',
        onChange: typeChange,
        request: () => [{ value: 1, label: '1asdfaqwfsafa' }, { value: 2, label: 'asdf23asdfa2' }]
      }
    },
    {}
  ],
  [
    {
      prop: 'relatedId',
      label: 'xxx',
      type: 'input',
      init: 55,
      component: {
        placeholder: '请输入sssddsid'
      }
    },
    {}
  ],
  [
    {
      prop: 'name',
      label: '名称',
      type: 'input',
      init: '李白',
      component: {
        placeholder: '请输入名称'
      }
    },
    {
      prop: 'count',
      label: 'saddd',
      type: 'input',
      init: '1111',
      component: {
        placeholder: '请输入ss'
      }
    }
  ],
  [
    {
      prop: 'remark',
      label: '说明',
      type: 'rich',
      init: `什么是纯文本 什么是富文本 – PingCode



相对于纯文本,富文本是指那些包含了格式信息的文本,比如字体样式(粗体、斜体等)、颜色、超链接、图像、表格等多媒体元素。富文本编辑器如Microsoft Word或网页上的HTML编辑器能支持这些格式。富文...

PingCode`,
      component: {
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

const formData = ref(baseFormData)
</script>
<style lang="scss" scoped></style>
