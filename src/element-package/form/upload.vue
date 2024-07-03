<template>
    <el-upload v-model:file-list="fileList" class="upload-part" action="/admin-api/admin/userDynamic/upload"
        :on-preview="handlePreview" :limit="1" :headers="headers" :on-remove="handleRemove" list-type="picture-card"
        :on-success="handleSuccess">
        <el-button>上传图片</el-button>
    </el-upload>
</template>

<script lang="ts" setup>
import { ref, watch, unref } from 'vue'
import { getLocal } from '@/utils/storage'
import { propTypes } from '@/utils/propTypes'
import type { UploadProps, UploadUserFile } from 'element-plus'
const headers = {
    JwtToken: getLocal('JwtToken')
}
const props = defineProps({
    modelValue: propTypes.string.def('')
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