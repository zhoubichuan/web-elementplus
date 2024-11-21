<template>
  <web-button :plain="true" @click="open">Show message</web-button>
  <web-button :plain="true" @click="openVn">VNode</web-button>
</template>

<script lang="ts" setup>
import WebMessage from 'components/message/index'
import { h } from 'vue'

const open = () => {
  WebMessage('This is a message.')
}

const openVn = () => {
  WebMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>