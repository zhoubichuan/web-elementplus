<template>
  <web-button :plain="true" @click="open1">提示消息</web-button>
  <web-button :plain="true" @click="open2">成功消息</web-button>
  <web-button :plain="true" @click="open3">警告消息</web-button>
  <web-button :plain="true" @click="open4">错误消息</web-button>
  <web-button :plain="true" @click="openVn">VNode</web-button>
</template>

<script lang="ts" setup>
import * as WebMessage from 'components/message/index'
import { h } from 'vue'

const open1 = () => {
  WebMessage.info('This is a message.')
}
const open2 = () => {
  WebMessage.success('提交成功！')
}
const open3 = () => {
  WebMessage.warning('This is a message.')
}
const open4 = () => {
  WebMessage.error('后端数据异常！')
}

const openVn = () => {
  WebMessage.default({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>