<template>
    <web-button @click="handleShow1">编辑大尺寸</web-button>
    <web-dialog title="1111" mold="create" size="big" v-model="show1" @handleCancel="handleCancel1"
        @handleConfirm="handleConfirm1">
        xxxxx
    </web-dialog>
    <web-button @click="handleShow1">预览大尺寸</web-button>
    <web-dialog title="1111" mold="view" size="big" v-model="show2" @handleCancel="handleCancel2"
        @handleConfirm="handleConfirm2">
        xxxxx
    </web-dialog>
    <web-button @click="handleShow2">消息小尺寸</web-button>
    <web-dialog title="1111" mold="message" size="small" v-model="show3" @handleCancel="handleCancel3"
        @handleConfirm="handleConfirm3">
        xxxxx
    </web-dialog>
    <web-button @click="handleShow3">编辑中尺寸</web-button>
    <web-dialog title="1111" mold="edit" size="middle" v-model="show4" @handleCancel="handleCancel4"
        @handleConfirm="handleConfirm4">
        xxxxx
    </web-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show1 = ref(false)
const handleShow1 = () => {
    show1.value = true
}
const handleCancel1 = () => {
    show1.value = false
}
const handleConfirm1 = () => {
    show1.value = false
}

const show2 = ref(false)
const handleShow2 = () => {
    show2.value = true
}
const handleCancel2 = () => {
    show2.value = false
}
const handleConfirm2 = () => {
    show2.value = false
}

const show3 = ref(false)
const handleShow3 = () => {
    show3.value = true
}
const handleCancel3 = () => {
    show3.value = false
}
const handleConfirm3 = () => {
    show3.value = false
}

const show4 = ref(false)
const handleShow4 = () => {
    show4.value = true
}
const handleCancel4 = () => {
    show4.value = false
}
const handleConfirm4 = () => {
    show4.value = false
}
</script>

<style lang="scss">
.web-button {
   margin-right: 20px;
}
</style>