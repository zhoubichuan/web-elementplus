<template>
  <el-select prop="type" v-model="image" placeholder="请选择类型" style="width: 36%" @change="handleSelect">
    <template v-if="options.length">
      <el-option v-for="(type, index) in options" :key="index" :value="type.value" :label="type.label">
        {{ type.label }}
      </el-option>
    </template>
  </el-select>
  <el-image style="width: 100px; height: 100px" :src="image" />
</template>

<script lang="ts" setup>
import { ref, watch, unref } from 'vue'
import { propTypes } from '@/utils/propTypes'

const { modelValue, options } = defineProps({
  modelValue: propTypes.string.def(''),
  options: {
    type: Array,
    default: () => []
  }
})
const image = ref('')
const emits = defineEmits(['update:modelValue'])

watch(
  () => modelValue,
  (val: string) => {
    image.value = val
  }
)
const handleSelect = (val: String) => {
  emits('update:modelValue', val)
}
</script>
<style>
.upload-part {
  display: flex;
}
</style>
