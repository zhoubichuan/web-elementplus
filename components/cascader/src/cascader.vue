<template>
  <el-cascader class="web-cascader" clearable v-bind="$attrs" :options="newOptions.length ? newOptions : $attrs.options">
    <template v-if="slots.default" #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
    <template v-if="slots.empty" #empty="scoped">
      <slot name="empty" v-bind="scoped"></slot>
    </template>
  </el-cascader>
</template>
<script lang="ts" setup>
import { useSlots, onMounted, ref } from 'vue'
import { ElCascader } from 'element-plus';
const { request } = defineProps({
  request: {
    type: Function,
    default: () => { }
  }
})
const newOptions = ref([])
const slots = useSlots()
onMounted(async () => {
  newOptions.value = await request()
})
defineOptions({
  name: 'WebCascader'
});
</script>

<style lang="scss" scoped>
@import '../../common.scss';

.web-tooltip {
  font-weight: 400;
  font-size: 20px;
  color: #244367;
  line-height: 30px;
  @include ellipsis(1);
}
</style>
