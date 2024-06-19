<template>
  <el-dialog custom-class="my-dialog" v-bind="newAttrs">
    <template v-if="$slots.title || $attrs['my-title']" #title>
      <span v-if="$attrs['my-title']" class="dialog-title">提示 </span>
      <slot v-else name="title"> </slot>
    </template>
    <slot>
      <p>弹窗内容自定义</p>
    </slot>
    <template v-if="$slots.footer || $attrs['my-footer']" #footer>
      <span v-if="$attrs['my-footer']" class="dialog-footer">
        <my-button type="info" @click="handleCancel">取 消</my-button>
        <my-button type="success" @click="handleConfirm">确 定</my-button>
      </span>
      <slot v-else name="footer"> </slot>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import myButton from '../my-button/index.vue'

export default defineComponent({
  name: 'WebDialog',
  components: {
    myButton
  },
  emits: ['my-cancel', 'my-confirm'],
  setup(props, { attrs, emit }) {
    const state = reactive({})
    let newAttrs = {
      ...attrs
    }
    const handleCancel = () => {
      emit('myCancel')
    }

    const handleConfirm = () => {
      emit('myConfirm')
    }
    return {
      ...toRefs(state),
      newAttrs,
      handleCancel,
      handleConfirm
    }
  }
})
</script>
<style lang="less">
.my-dialog {
  &.is-disabled {
    background-color: #f2f2f2;
    color: #a5a5a5;
    border: 1px solid #e9e9e9;
  }
  .el-dialog__header {
    padding: var(--dialog-header-padding);
  }
  .el-dialog__footer {
    padding: var(--dialog-footer-padding);
    .el-button + .el-button {
      margin-left: var(--dialog-footer-button-space);
    }
  }
}
</style>
<style lang="less">
.el-dialog__header {
  padding: 20px 32px;
  border-bottom: 1px solid #edeeef;
}
.el-dialog__body {
  padding: 22px 32px 32px;
}
.el-dialog__title {
  font-weight: bold;
}
</style>
