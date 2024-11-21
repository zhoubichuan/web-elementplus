<template>
  <div style="max-width: 600px">
    <web-alert title="Success alert" type="success" />
    <web-alert title="Info alert" type="info" />
    <web-alert title="Warning alert" type="warning" />
    <web-alert title="Error alert" type="error" />
  </div>
</template>

<style scoped>
.web-alert {
  margin: 20px 0 0;
}
.web-alert:first-child {
  margin: 0;
}
</style>
