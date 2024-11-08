<template>
    <!-- 搜索组件 -->
    <web-upload> </web-upload>
</template>

<script lang="ts" setup>
import { ref, watch, unref } from 'vue'
import type { UploadProps, UploadUserFile } from 'element-plus'

const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    }
})
const emits = defineEmits(['update:modelValue'])
const fileList = ref<UploadUserFile[]>(props.modelValue ? [
    {
        name: '',
        url: props.modelValue,
    },
] : [])

watch(
    () => props.modelValue,
    (val: string) => {
        console.log(val, 'watch')
        if (val === unref(fileList.value[0].url)) return
        fileList.value = val ? [
            {
                name: '',
                url: val,
            },
        ] : []
    }
)


const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}
const handleSuccess = (val: any) => {
    console.log(val.d[0], 'val')
    emits('update:modelValue', val.d[0])
}
const handlePreview: UploadProps['onPreview'] = (file) => {
    console.log(file)
}
</script>
<style>
.upload-part {
    display: flex;
}
</style>
