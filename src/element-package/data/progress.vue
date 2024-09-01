<template>
    <div class="demo-progress">
      <web-progress :percentage="50" />
      <web-progress :percentage="100" :format="format" />
      <web-progress :percentage="100" status="success" />
      <web-progress :percentage="100" status="warning" />
      <web-progress :percentage="50" status="exception" />
    </div>
  </template>
  
  <script lang="ts" setup>
  const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
  </script>
  
  <style scoped>
  .demo-progress .web-progress--line {
    margin-bottom: 15px;
    max-width: 600px;
  }
  </style>