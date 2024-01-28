<template>
  <br />
  <div>
    <web-space>
      <web-button type="text" @click="open1">警告</web-button><br />
      <web-button type="text" @click="open2">错误</web-button>
    </web-space>
  </div>
</template>

<script lang="ts" setup>

// const open1 = () => {
//   MyMessageBox('种植计划一旦废除无法恢复，您确定要废除当前种植计划吗?', '风险提醒')
//     .then(() => {
//       MyMessage({
//         type: 'success',
//         message: 'Delete completed'
//       })
//     })
//     .catch(() => {
//       MyMessage({
//         type: 'info',
//         message: 'Delete canceled'
//       })
//     })
// }

// const open2 = () => {
//   MyMessageBox('种植计划一旦废除无法恢复，您确定要废除当前种植计划吗?', '风险提醒', {
//     type: 'error'
//   })
//     .then(() => {
//       MyMessage({
//         type: 'success',
//         message: 'Delete completed'
//       })
//     })
//     .catch(() => {
//       MyMessage({
//         type: 'info',
//         message: 'Delete canceled'
//       })
//     })
// }
</script>
