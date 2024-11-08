<template>
    <web-button @click="handleShow">显示</web-button>
    <web-dialog v-bind="{ title: '111', 'web-footer': true }" v-model="show" @handleCancel="handleCancel"
        @handleConfirm="handleConfirm">
        xxxxx
    </web-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
const handleShow = () => {
    show.value = true
}
const handleCancel = () => {
    show.value = false
}
const handleConfirm = () => {
    show.value = false
}
</script>

<style lang="scss">
.el-cascader-menu__wrap {
    .el-cascader-node {
        padding: 0 !important;
    }
}
</style>