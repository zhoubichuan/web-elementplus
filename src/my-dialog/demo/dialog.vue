<template>
  <div>
    <br />
    <my-button type="text" @click="dialogVisible1 = true">Dialog1</my-button>
    <my-button type="text" @click="dialogVisible2 = true">Dialog2</my-button>
    <br />
    <br />
    <my-dialog
      v-model="dialogVisible1"
      title="Tips"
      width="30%"
      :before-close="handleClose"
      my-footer
    >
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <my-button type="info" @click="dialogVisible1 = false">取 消</my-button>
          <my-button type="success" @click="dialogVisible1 = false">确 定</my-button>
        </span>
      </template>
    </my-dialog>
    <br />
    <br />
    <my-dialog v-model="dialogVisible2" title="Tips" width="30%" :before-close="handleClose">
      <template #title>123123</template>
      <div class="content">
        <div class="radio-box">
          <div class="radio-item">
            <div class="text">触发规则时自动运行设备：</div>
            <my-radio v-model="ruleObj.workModel" label="AUTO">{{ '' }}</my-radio>
          </div>
          <div class="radio-item">
            <div class="text">触发规则时仅报警：</div>
            <my-radio v-model="ruleObj.workModel" label="ONLY_REPORT">{{ '' }}</my-radio>
          </div>
        </div>
        <div class="title-rule">灌溉规则</div>
        <div class="value-rule">当田间土壤含水量低于1时启动喷灌机</div>
      </div>
    </my-dialog>
  </div>
</template>
<script lang="ts" setup>
// import { MyMessageBox } from 'MyElementPlus'
import { ref } from 'vue'

const dialogVisible1 = ref(false)
const dialogVisible2 = ref(false)
const handleClose = (done: () => void) => {
  // MyMessageBox('', 'Are you sure to close this dialog?')
  //   .then(() => {
  //     done()
  //   })
  //   .catch(() => {
  //     // catch error
  //   })
}
const ruleObj = {
  workModel: 1
}
</script>

<style lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
