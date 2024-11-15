<template>
  <web-dialog-create :rules="rules" size="big" title="编辑xx" v-model="show" :close="handleClose" @reloadList="reloadData"
    :creteForm="formData" :request="handleRequest"/>
  <web-button @click="handleCreate">编辑</web-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
const create = ref(false)
const handleCreate = () => {
  show.value = true
  create.value = true
}
const handleClose = () => {
  show.value = false
  create.value = false
}
const handleRequest = (val) => {
  debugger
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
      component: {
        placeholder: '请选择类型',
        onChange: typeChange,
        options: [{ value: 1, label: '1' }, { value: 2, label: '2' }]
      }
    },
    {}
  ],
  [
    {
      prop: 'relatedId',
      label: 'xxx',
      type: 'input',
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
      component: {
        placeholder: '请输入名称'
      }
    },
    {
      prop: 'count',
      label: 'saddd',
      type: 'input',
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
const baseFormData2 = [
  [
    {
      prop: 'type',
      label: '类型',
      type: 'select',
      components: {
        options: []
      }
    }
  ],
  [
    {
      prop: 'relatedId',
      label: 'sdqewqwe',
    }
  ],
  [
    {
      prop: 'image',
      label: '图片',
      type: 'web-select-image',
    }
  ],
  [
    {
      prop: 'remark',
      label: '说明',
      type: 'web-rich',
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
