<template>
  <br />
  <web-button :plain="true" @click="open1">message</web-button>
  <web-button :plain="true" @click="open2">success</web-button>
  <web-button :plain="true" @click="open3">warning</web-button>
  <web-button :plain="true" @click="open4">error</web-button>
</template>

<script lang="ts" setup>
// import { MyMessage } from 'MyElementPlus'

const open1 = () => {
  // MyMessage({
  //   message: 'This is a message.'
  // })
}
const open2 = () => {
  // MyMessage({
  //   message: 'Congrats, this is a success message.',
  //   type: 'success'
  // })
}
const open3 = () => {
  // MyMessage({
  //   message: 'Warning, this is a warning message.',
  //   type: 'warning'
  // })
}
const open4 = () => {
  // MyMessage({
  //   message: 'Oops, this is a error message.',
  //   type: 'error'
  // })
}
</script>
