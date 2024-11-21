<template>
  <div class="input-more-child">
    <el-input class="input" v-model="value" @change="handleChange"/>
    <el-button link>上移</el-button>
    <el-button link> 下移</el-button>
    <el-icon style="font-size: 24px">
      <Delete style="width: 20px; height: 20px; margin-left: 8px; margin-top: 8px" />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const { modelValue } = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['update:modelValue'])
defineOptions({
  name: 'WebInputMoreChild'
});
const value = ref(modelValue)
const handleChange = (val) => {
  emits('update:modelValue', val)
}
</script>
<style scoped lang="scss">
.input-more-child {
  width: 100%;

  .input {
    display: inline-block;
    width: calc(100% - 130px);

    :deep(.el-input__wrapper) {
      width: 100%;
    }
  }
}
</style>
