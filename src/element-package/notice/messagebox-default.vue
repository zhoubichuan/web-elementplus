<template>
  <web-button plain @click="open1">alert</web-button>
  <web-button plain @click="open2">confirm</web-button>
  <web-button plain @click="open3">prompt</web-button>
</template>

<script lang="ts" setup>
import WebMessage from 'components/message/index'
import WebMessageBox from 'components/message-box/index'
import type { Action } from 'element-plus'

const open1 = () => {
  WebMessageBox.alert('This is a message', 'Title', {
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      WebMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
const open2 = () => {
  WebMessageBox.confirm('This is a message', 'Title', {
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      WebMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
const open3 = () => {
  WebMessageBox.prompt('This is a message', 'Title', {
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      WebMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
}
</script>