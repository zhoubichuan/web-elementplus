<template>
  <web-button plain @click="open1"> Success </web-button>
  <web-button plain @click="open2"> Warning </web-button>
  <web-button plain @click="open3"> Info </web-button>
  <web-button plain @click="open4"> Error </web-button>
</template>

<script lang="ts" setup>
import WebNotification from 'components/notification/index'

const open1 = () => {
  WebNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  WebNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  WebNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  WebNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}
</script>
