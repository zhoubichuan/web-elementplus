<template>
    <el-input
        :class="{ 'web-input': true, textarea: attrs.type === 'textarea' }"
        :modelValue="modelValue"
        @update:modelValue="handleUpdate"
        v-bind="newAttrs"
    >
    </el-input>
</template>

<script setup lang="ts" name="WebInput">
import { ElInput } from 'element-plus';
import { useAttrs, defineEmits } from 'vue';
const attrs = useAttrs();
let newAttrs = attrs;
if (attrs.type === 'textarea') {
    newAttrs = { 'show-word-limit': true, maxlength: 1024, rows: 12, placeholder: '请输入', ...newAttrs };
}
const emits = defineEmits<{ 'update:modelValue': [string] }>();
const { modelValue } = defineProps<{ modelValue: '' }>();
const handleUpdate = (val: string) => {
    emits('update:modelValue', val);
};
</script>
<script lang="ts">
export default {
    name: 'WebInput'
};
</script>

<style lang="scss" scoped>
@import '../../config.scss';
@import '../../common.scss';
.#{$prefix}-input {
    &.textarea {
        width: 100%;
        :deep(.#{$namespace}-textarea__inner) {
            padding: 16px 40px 16px 16px;
            background-color: #f3f6f9;
            border-radius: 8px 8px 8px 8px;
            border: 1px solid #eef2f6;
            font-weight: 400;
            font-size: 24px;
            overflow: auto;
            @include scrollbar();
        }
        :deep(.#{$namespace}-input__count) {
            font-size: 24px;
            line-height: 28px;
            bottom: 10px;
            right: 20px;
            background-color: #f3f6f9;
        }
    }
}
</style>
