<template>
  <el-dialog v-bind="$attrs" width="1160px" destroy-on-close>
    <el-form ref="formRef" :rules="rules" :model="formData" label-width="80px">
      <el-form-item label="关联项目" prop="type">
        <el-select
          v-model="formData.type"
          placeholder="请选择类型"
          style="width: 36%"
          @change="typeChange"
        >
          <el-option
            v-for="(type, index) in modelTypes"
            :key="index"
            :value="type.value"
            :label="type.desc"
          >
            {{ type.desc }}
          </el-option>
        </el-select>
      </el-form-item>
      <template v-if="formData.type == '0'">
        <el-form-item label="模型id" prop="relatedId">
          <el-input
            v-model="formData.relatedId"
            placeholder="请输入模型id"
            style="width: 36%"
          ></el-input>
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="名称" prop="name">
              <el-input
                v-model="formData.name"
                placeholder="请输入名称"
                style="width: 100%"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="铸造数量" prop="count">
              <el-input
                v-model="formData.count"
                placeholder="请输入铸造数量"
                style="width: 100%"
              ></el-input>
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
        <editor
          v-model="formData.remark"
          type="textarea"
          placeholder="请输入NFT说明"
          style="width: 50%"
        ></editor>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, toRefs, watch, unref } from "vue";
import { ElForm, ElMessage } from "element-plus";
// initData 有数据为编辑状态
const props = defineProps<{ close: () => void; initData: any | undefined }>();
const { close } = toRefs(props);
const rules = {
  relatedId: [
    { required: true, message: "请输入模型/资产id", trigger: "blur" },
  ],
  type: [{ required: true, message: "请选择关联项目", trigger: "blur" }],
  image: [{ required: true, message: "请选择展示图", trigger: "blur" }],
  count: [{ required: true, message: "请输入铸造数量", trigger: "blur" }],
  name: [{ required: true, message: "请输入名称", trigger: "blur" }],
  remark: [{ required: true, message: "请输入NFT说明", trigger: "blur" }],
};
const modelTypes = ref<Array<any>>([
  {
    value: "1",
    desc: "模型",
  },
  {
    value: "2",
    desc: "资产",
  },
]);
const initFormData: any = {
  relatedId: "",
  type: "1",
  count: "",
  name: "",
  remark: "",
};
const initFormData2: any = {
  relatedId: "1",
  type: "2",
  remark: "",
  image: "",
};
const dialogTitle = ref("创建NFT");
const formRef = ref<InstanceType<typeof ElForm>>();
const formData = ref<any>(props.initData ? props.initData : initFormData);
const emits = defineEmits(["reloadList"]);
watch(
  () => props.initData,
  (val: any | undefined) => {
    if (val === unref(formData.value)) return;
    formData.value = val ? val : initFormData;
  }
);
const typeChange = (val: any) => {
  if (val === "1") {
    formData.value = initFormData;
  } else {
    formData.value = initFormData2;
  }
};

const handleSubmit = () => {
  formRef.value?.validate(async (valid) => {
    if (valid) {
    }
  });
};
</script>
<style lang="scss" scoped>
.el-cascader-panel {
  :deep(".el-cascader-menu") {
    :first-of-type {
    }
  }
}
</style>
