<template>
  <div>
    <web-select v-model="value1" :options="selectOptions"></web-select>
    <web-button :disabled="!select.length">选择</web-button>
    <web-cascader-panel v-model="select" :props="props" :options="cascaderOptions" @change="handleChange" />
  </div>
  <div>
    <web-select v-model="value1" :options="selectOptions"></web-select>
    <web-button :disabled="!select.length">取消</web-button>
    <web-cascader-panel v-model="select" :props="props" :options="cascaderOptions" @change="handleChange" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const value1 = ref<string>('Option1')
const select = ref('')
const props = {
  multiple: true,
  expandTrigger: 'hover' as const,
}
const cascaderOptions = ref([])
const selectOptions = ref([
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
])
const handleChange = () => {

}
onMounted(async () => {
  const response = await fetch('./cascader-panel.json')
  const { code, result } = await response.json();
  cascaderOptions.value = result
})

</script>