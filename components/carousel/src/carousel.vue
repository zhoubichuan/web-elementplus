<template>
  <el-carousel class="web-carousel" v-bind="$attrs">
    <template v-if="slots.default" #default>
      <slot name="default"></slot>
    </template>
  </el-carousel>
</template>

<script lang='ts' setup name="WebCarousel">
import { useSlots } from 'vue'
const slots = useSlots()

defineOptions({
  name: 'WebCarousel'
});
</script>
