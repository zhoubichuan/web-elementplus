<template>
  <div class="web-select-image">
    <web-select-options :options="options" :option-label="optionLabel" :option-value="optionValue" v-bind="$attrs" />
    <el-image style="width: 100px; height: 100px" :src="imageSrc || image" />
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, unref } from 'vue'
import { propTypes } from '@/utils/propTypes'
import WebSelectOptions from '../../select-options/index'
const { options, optionLabel, optionValue, imageSrc } = defineProps({
  options: {
    type: Array,
    default: () => []
  },
  optionLabel: {
    type: String,
    default: 'desc'
  },
  optionValue: {
    type: String,
    default: 'id'
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
  }

  .el-image {
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
  }
}
</style>
