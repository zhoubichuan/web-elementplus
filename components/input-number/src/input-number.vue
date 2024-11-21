<template>
    <el-input-number :class="{ 'web-input-number': true }" v-bind="$attrs">
    </el-input-number>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue';
import { ElInputNumber } from 'element-plus';

defineOptions({
    name: 'WebInputNumber'
});


</script>

<style lang="scss" scoped>
@import '../../config.scss';
@import '../../common.scss';

.#{$prefix}-input-number {}
</style>
