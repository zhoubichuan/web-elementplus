<template>
  <!-- 表格区域 -->
  <BaseTable
    :table-config="tableConfig2"
    :table-data="tableData ?? []"
    :page-info="pageInfo"
    @changePageSize="handleSizeChange"
    @changeCurrentPage="handleCurrentChange"
    @toDelete="toDelete"
    @toEdit="toEdit"
  >
    <template #modelPicture="scope">
      <el-row>
        <div
          class="block"
          v-for="(pic, index) in scope.row.modelPicture"
          :key="index"
        >
          <el-image
            style="width: 60px; height: 60px; margin-left: 10px"
            :src="pic"
            :preview-src-list="scope.row.modelPicture"
          ></el-image>
        </div>
      </el-row>
    </template>
  </BaseTable>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { ElForm, ElMessage } from "element-plus";

// 查询参数
const getTopicParam = reactive<Record<string, string>>({
  type: "",
  sex: "",
  timeMills: "",
});
// const tableData = []

const modelTypes = ref<Array<any>>();

//上传弹窗2
const uploadDialogVisible2 = ref(false);
const uploadFile2 = () => {
  const { id, upWay } = currentEditItem.value;
  if (id && upWay == 0) dialogTitle.value = "修改服饰";
  else if (id && upWay == 1) dialogTitle.value = "修改模型";
  else if (upWay == 0) dialogTitle.value = "上传服饰";
  else if (upWay == 1) dialogTitle.value = "上传模型";
  uploadDialogVisible2.value = true;
};

//上传弹窗
const uploadDialogVisible = ref(false);
const uploadFile = () => {
  const { id, upWay } = currentEditItem.value;
  if (id && upWay == 0) dialogTitle.value = "修改服饰";
  else if (id && upWay == 1) dialogTitle.value = "修改模型";
  else if (upWay == 0) dialogTitle.value = "上传服饰";
  else if (upWay == 1) dialogTitle.value = "上传模型";
  uploadDialogVisible.value = true;
};

// 上传或修改服饰对象
const initItem = {
  uid: " currentAdmin.value?.id",
  modelName: "",
  type: "",
  blockPicture: [],
  modelPicture: [],
  sex: 0,
  upWay: 0,
  status: 0,
  timeMills: new Date().getTime() + "",
};
const currentEditItem = ref<any>({ ...initItem });
const resetItem = () => {
  currentEditItem.value = initItem;
};
// 删除预览的图片
const delUrl = (url: string) => {
  console.log("删除了", url);
  const index = currentEditItem.value.modelPicture.findIndex(
    (ul: any) => ul == url
  );
  currentEditItem.value.modelPicture.splice(index, 1);
};

const dialogTitle = ref("修改服饰");
// 修改
const toEdit = (item: any) => {};

const uploadFormRef = ref<InstanceType<typeof ElForm>>();

const rules = {
  upWay: [{ required: true, message: "请选择上传文件类型", trigger: "blur" }],
  modelName: [{ required: true, message: "请输入名称", trigger: "blur" }],
  type: [{ required: true, message: "请选择类型", trigger: "blur" }],
  sex: [{ required: true, message: "请选择适用性别", trigger: "blur" }],
};
</script>
<style lang="scss" scoped>
.upload-area {
  width: 185px;
  height: 60px;
  background: #ededed;

  > label {
    margin-top: 15px;
    margin-left: 60px;
    background-color: #fff;
    border: 1px solid grey;
    cursor: pointer;
  }

  > div {
    margin-top: -10px;
    color: #a5a5a5;

    span {
      display: inline-block;
      width: 100%;
      line-height: 15px;
      text-align: center;
      transform: scale(0.7);
    }
  }
}

.up-dialog {
  position: relative;
}

.preview {
  position: absolute;
  top: 120px;
  right: 20px;
  z-index: 9999;
  width: 100px;
  height: 220px;
  overflow: scroll;
  background-color: #ededed;

  > div:first-child {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
}

.close-icon {
  position: absolute;
  top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 0 0 0 5px;
  color: #fff;
  font-weight: bold;
  background-color: red;
  border-radius: 50%;
  cursor: pointer;
}

/* 67.3  260.9 */
</style>
