<template>
  <web-dialog-create :rules="rules" :size="size" title="创建xx" v-model="show" :close="handleClose" :creteForm="formData"
    :request="handleRequest" />
  <web-button @click="handleCreate('big')">创建大尺寸</web-button>
  <web-button @click="handleCreate('middle')">创建中尺寸</web-button>
  <web-button @click="handleCreate('small')">创建小尺寸</web-button>
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
  debugger
}

const rules = {
  relatedId: [
    { required: true, message: '请输入sssdds/rtyrtyrt', trigger: 'blur' }
  ],
  type: [{ required: true, message: '请选择asdfasdf', trigger: 'blur' }],
  image: [{ required: true, message: '请选择展示图', trigger: 'blur' }],
  count: [
    { required: true, message: '请输入数量', trigger: 'blur' }
  ],
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  remark: [{ required: true, message: '请输入说明', trigger: 'blur' }]
}
const formData = [
  [
    {
      prop: 'type',
      label: '类型',
      type: 'select',
      component: {
        placeholder: '请选择类型',
        onChange: () => { alert(1) },
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
        style: 'width: 100%'
      }
    }
  ]
]
</script>
