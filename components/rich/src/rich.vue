<template>
  <div>
    <div id="text-container" class="text"></div>
    <div id="toolbar-container" class="toolbar"></div>
  </div>
</template>

<script setup lang="ts" name="WebRich">
import { onMounted, computed, PropType, defineProps } from 'vue'
import E from 'wangeditor'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  menus: {
    type: Array as PropType<string[]>,
    default: []
  }
})
const emit = defineEmits(['update:modelValue', 'change'])
onMounted(() => {
  const editor = new E('#text-container', '#toolbar-container') // 传入两个元素
  // 设置编辑区域高度为 500px
  editor.config.height = 200
  // 配置菜单栏，删减菜单，调整顺序
  editor.config.menus = props.menus
  // 配置 onchange 回调函数
  editor.config.onchange = function (newHtml: String) {
    emit('update:modelValue', newHtml)
  }
  editor.create()
  editor.txt.html(props.modelValue)
})
</script>
<style lang="scss" scoped>
// 富文本样式
.toolbar {
  min-height: 200px;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  border-top: none;

  .w-e-toolbar {
    z-index: -99999 !important;
  }
}

.text {
  min-height: 30px;
  border: 1px solid #ccc;
}
</style>
