<template>
  <web-transfer-cascader-panel :selectData="[]" v-model="value" :data="data" :requestSelect="requestSelect" :requestTree="requestTree" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}
const requestSelect = () => {
  return []
}
const requestTree = () => {
  return []
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([[], [], [], 2])
</script>