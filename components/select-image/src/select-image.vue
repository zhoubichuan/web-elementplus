<template>
  <div class="web-select-image">
    <web-select-options v-if="!view" :options="options" :option-label="optionLabel" :option-value="optionValue"
      v-bind="$attrs" />
    <el-image :src="imageSrc || image" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import WebSelectOptions from '../../select-options/index'
const { view, options, optionLabel, optionValue, imageSrc } = defineProps({
  view: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    require: true
  },
  optionLabel: {
    type: String,
    default: 'label'
  },
  optionValue: {
    type: String,
    default: 'value'
  },
  imageSrc: {
    type: String,
    default: ''
  }
})
const image = ref('')

</script>
<style lang="scss">
.web-select-image {
  width: 100%;

  .web-select {
    display: inline-block;
    width: calc(100% - 120px);
    vertical-align: middle;
    margin-right: 20px;
  }

  .el-image {
    display: inline-block;
    vertical-align: middle;
    width: 100px;
    height: 100px;
  }
}
</style>
