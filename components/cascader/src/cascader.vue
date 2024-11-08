<template>
  <el-cascader class="web-cascader" v-bind="$attrs">
    <template #default="scoped">
      <slot name="default" v-bind="scoped"></slot>
    </template>
    <template #empty="scoped">
      <slot name="empty" v-bind="scoped"></slot>
    </template>
  </el-cascader>
</template>
<script lang="ts" setup>
import { ElCascader } from 'element-plus';

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
