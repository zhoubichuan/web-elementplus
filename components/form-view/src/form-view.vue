<template>
  <web-dialog v-bind="{ ...attrs, close }">
    <web-form ref="formRef" :model="formData" label-width="80px">
      <web-form-item v-for="(formItem, formItemIndex) in data" :formData="formItem" :key="formItemIndex" />
    </web-form>
  </web-dialog>
</template>

<script setup lang="ts">
import { defineProps, useAttrs } from 'vue'
const { close, data } = defineProps<{ close: () => void, data: [] }>()
const { data: formData, ...attrs } = useAttrs()
</script>
<script lang='ts'>
export default {
  name: "WebFormView"
}
</script>
<style lang="scss" scoped></style>
