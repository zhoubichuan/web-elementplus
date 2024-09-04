<template>
  <el-dialog v-bind="attrs" @close="handleCancel">
      <template v-if="$slots.title || $attrs['web-title']" #title>
          <span v-if="$attrs['web-title']" class="dialog-title">提示 </span>
          <slot v-else name="title"> </slot>
      </template>
      <slot>
          <p>弹窗内容自定义</p>
      </slot>
      <template v-if="$slots.footer || $attrs['web-footer']" #footer>
          <span v-if="$attrs['web-footer']" class="dialog-footer">
              <web-button @click="handleCancel">取 消</web-button>
              <web-button type="primary" @click="handleConfirm">确 定</web-button>
          </span>
          <slot v-else name="footer"> </slot>
      </template>
  </el-dialog>
</template>

<script lang="ts" setup name="WebDialog">
import { defineEmits, useAttrs } from "vue";
const emit = defineEmits(["handleCancel", "handleConfirm"])
const handleCancel = () => {
  emit("handleCancel");
};
const defaultAttrs = useAttrs()
const attrs = {
  ...defaultAttrs,
  class: "web-dialog",
  "lock-scroll": true,
  "destroy-on-close": true,
  width: "80%"
}

const handleConfirm = () => {
  emit("handleConfirm");
};
</script>
<script lang='ts'>
export default {
  name: "WebDialog"
}
</script>
<style lang="scss">
.web-dialog {
  margin-top: 0;
  top: 50%;
  transform: translateY(-50%);

  .el-dialog__body {
      height: calc(100vh - 200px);
      overflow-y: auto;
  }
}

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
<style>
.el-overlay-dialog {
  overflow: hidden;
}
</style>