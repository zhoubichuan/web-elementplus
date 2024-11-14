<template>
  <web-button plain @click="open1"> 错误 </web-button>
  <web-button plain @click="open2"> 成功 </web-button>
  <web-button plain @click="open3"> 警告 </web-button>
  <web-button plain @click="open4"> 提示 </web-button>
</template>

<script lang="ts" setup>
import WebNotification from 'components/notification/index'

const open1 = () => {
  WebNotification.error()
}

const open2 = () => {
  WebNotification.success()
}

const open3 = () => {
  WebNotification.warning()
}

const open4 = () => {
  WebNotification.info()
}
</script>
