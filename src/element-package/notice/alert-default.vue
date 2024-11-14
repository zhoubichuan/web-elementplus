<template>
  <div style="max-width: 600px">
    <web-alert title="Success alert" type="success" />
    <web-alert title="Info alert" type="info" />
    <web-alert title="Warning alert" type="warning" />
    <web-alert title="Error alert" type="error" />
  </div>
</template>

<style scoped>
.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}
</style>
