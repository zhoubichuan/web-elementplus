<template>
  <web-row class="mb-4">
    <web-button>Default</web-button>
    <web-button type="primary">Primary</web-button>
    <web-button type="success">Success</web-button>
    <web-button type="info">Info</web-button>
    <web-button type="warning">Warning</web-button>
    <web-button type="danger">Danger</web-button>
  </web-row>
  <web-row class="mb-4">
    <web-button plain>Plain</web-button>
    <web-button type="primary" plain>Primary</web-button>
    <web-button type="success" plain>Success</web-button>
    <web-button type="info" plain>Info</web-button>
    <web-button type="warning" plain>Warning</web-button>
    <web-button type="danger" plain>Danger</web-button>
  </web-row>
  <web-row class="mb-4">
    <web-button round>Round</web-button>
    <web-button type="primary" round>Primary</web-button>
    <web-button type="success" round>Success</web-button>
    <web-button type="info" round>Info</web-button>
    <web-button type="warning" round>Warning</web-button>
    <web-button type="danger" round>Danger</web-button>
  </web-row>
  <web-row class="mb-4">
    <web-button :icon="Search" circle />
    <web-button type="primary" :icon="Edit" circle />
    <web-button type="success" :icon="Check" circle />
    <web-button type="info" :icon="Message" circle />
    <web-button type="warning" :icon="Star" circle />
    <web-button type="danger" :icon="Delete" circle />
  </web-row>
</template>

<script lang="ts" setup>
import { Check, Delete, Edit, Message, Search, Star } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped>
.mb-4 {
  display: block;
  margin-top: 20px;
}
</style>
