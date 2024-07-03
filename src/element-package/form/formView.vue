<template>
  <el-dialog v-bind="$attrs" width="1160px" destroy-on-close >
    <el-form ref="formRef" :model="formData" label-width="80px">
      <el-form-item label="关联项目" prop="type">
        {{ modelTypes.find(i => i.value === formData.type)?.desc }}
      </el-form-item>
      <template v-if="formData.type == '0'">
        <el-form-item label="模型id" prop="relatedId">
          {{ formData.relatedId }}
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="名称" prop="name">
              {{ formData.name }}
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="铸造数量" prop="count">
              {{ formData.count }}
            </el-form-item>
          </el-col>
        </el-row>

      </template>
      <template v-else>
        <el-form-item label="资产" prop="relatedId">
          <cascader v-model="formData.relatedId" style="width: 100%"></cascader>
        </el-form-item>
        <el-form-item label="展示图" prop="image">
          <upload v-model="formData.image" style="width: 50%"></upload>
        </el-form-item>
      </template>
      <el-form-item label="NFT说明" prop="remark">
        <div v-html="formData.remark"></div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, toRefs, watch, unref } from 'vue'
import { NFTListItem } from '@/api/type'
import { IModelTypeItem, submit } from '@/api/nft'
import { ElForm, ElMessage } from 'element-plus'
import cascader from './cascader.vue'
import upload from './upload.vue'
// initData 有数据为编辑状态
const props = defineProps<{ close: () => void, initData: NFTListItem | undefined }>()
const { close } = toRefs(props)
const modelTypes = ref<Array<IModelTypeItem>>([
  {
    value: '1',
    desc: '模型',
  },
  {
    value: '2',
    desc: '资产',
  },
])
const initFormData: NFTListItem = {
  relatedId: '',
  type: '1',
  count: '',
  name: '',
  remark: '',
}
const initFormData2: NFTListItem = {
  relatedId: '1',
  type: '2',
  remark: '',
  image: ''
}
const formRef = ref<InstanceType<typeof ElForm>>()
const formData = ref<NFTListItem>(props.initData ? props.initData : initFormData)
watch(
  () => props.initData,
  (val: NFTListItem | undefined) => {
    if (val === unref(formData.value)) return
    formData.value = val ? val : initFormData
  }
)
</script>
<style lang="scss" scoped></style>
