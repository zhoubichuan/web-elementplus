<template>
  <div>
    <el-input v-bind="$attrs" style="width: 240px" @input="handleInput" />
    <el-button class="btn" @click="handleClick">确认</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, useAttrs ,defineProps} from 'vue'
import { ElMessage } from 'element-plus'
import { ElButton, ElInput } from 'element-plus'

const attrs = useAttrs()
const emit = defineEmits(['update:modelValue'])
const {request} = defineProps({
  request:{
    type:Function,
    default:()=>{}
  }
})
const handleInput = (val: string) => {
  emit('update:modelValue', val)
}
const handleClick = async () => {
  let res = await request({ spuId: attrs.modelValue })
  if (res) {
    ElMessage.warning('spuId不存在')
  } else {
    ElMessage.success('spuId存在')
  }
}
defineOptions({
    name: 'WebInputButton'
});
</script>

<style lang="scss" scoped>
.btn {
  margin-left: 10px;
}
</style>
