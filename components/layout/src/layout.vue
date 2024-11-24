<template>
  <el-row :gutter="20">
    <el-col :span="24 / data.length" v-for="(child, index) in data" :key="index">
      <slot v-bind="child">
        <component v-if="child.type" :is="child.type" v-bind="child.component" v-model="child.model"></component>
        <div v-else>1111</div>
      </slot>
    </el-col>
  </el-row>
</template>
<script setup lang="ts" name="WebLayout">
import { defineAsyncComponent ,ref} from 'vue'
const { data } = defineProps<{
  data: {
    type: Array
    default: () => []
  }
}>()
defineOptions({
  name: 'WebLayout',
  components: {
    input: defineAsyncComponent(() => import(`../../input/index`)),
    'input-more': defineAsyncComponent(() => import(`../../input-more/index`)),
    'input-button': defineAsyncComponent(() => import(`../../input-button/index`)),
    select: defineAsyncComponent(() => import(`../../select/index`)),
    'select-image': defineAsyncComponent(() => import(`../../select-image/index`)),
    cascader: defineAsyncComponent(() => import(`../../cascader/index`)),
    rich: defineAsyncComponent(() => import(`../../rich/index`)),
    'transfer-cascader-panel': defineAsyncComponent(() => import(`../../transfer-cascader-panel/index`)),
    'cascader-panel': defineAsyncComponent(() => import(`../../cascader-panel/index`)),
    upload: defineAsyncComponent(() => import(`../../upload/index`)),
    'upload-template': defineAsyncComponent(() => import(`../../upload-template/index`))
  }
})
</script>
