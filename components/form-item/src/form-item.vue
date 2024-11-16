<template>
  <div>
    <el-row v-if="formData.length" :gutter="20">
      <el-col :span="24 / formData.length" v-for="(item, index) in formData" :key="index">
        <el-form-item :label="item.label" :prop="item.prop" v-if="item.type">
          <template v-if="item.type === 'div'">
            <div class="rich" contenteditable="true" v-html="item.init"></div>
          </template>
          <template v-else>
            <component :is="item.type" v-bind="item.component" v-model="formModel[item.prop]" />
          </template>
          <!-- <template v-else>
            <Render v-if="typeof formData[0].render === 'function'" :render="formData[0].render"
              :formItem="formData[0]"></Render>
            <span v-else>{{ formData[0].render }}</span>
          </template> -->
        </el-form-item>
      </el-col>
      <!-- <el-col :span="12">
        &nbsp;
      </el-col>
      <el-col :span="10">
        <el-form-item :label="formData[1].label" :prop="formData[1].prop">
          <Render v-if="typeof formData[1].render === 'function'" :render="formData[1].render" :formItem="formData[1]">
          </Render>
          <span v-else>{{ formData[1].render }}</span>
        </el-form-item>
      </el-col> -->
    </el-row>
    <!-- <el-row v-else-if="formData.length === 1">
      <el-col :span="24">
        <el-form-item :label="formData[0].label" :prop="formData[0].prop">
          <Render v-if="typeof formData[0].render === 'function'" :render="formData[0].render"
            :formItem="formData[0]" />
          <span v-else>{{ formData[0].render }}</span>
        </el-form-item>
      </el-col>
    </el-row> -->
  </div>
</template>

<script lang="ts" setup>
import Render from '../../Render.js'
import { defineAsyncComponent, inject } from 'vue'

const formModel = inject('formModel')
const { formData } = defineProps({
  formData: {
    type: Array,
    default: () => []
  }
})
defineOptions({
  name: 'WebFormItem',
  components: {
    Render,
    input: defineAsyncComponent(() => import(`../../input/index`)),
    select: defineAsyncComponent(() => import(`../../select/index`)),
    'select-image': defineAsyncComponent(() => import(`../../select-image/index`)),
    cascader: defineAsyncComponent(() => import(`../../cascader/index`)),
    rich: defineAsyncComponent(() => import(`../../rich/index`)),
    'transfer-cascader-panel': defineAsyncComponent(() => import(`../../transfer-cascader-panel/index`)),
  }
})
</script>

<style>
.rich {
  -webkit-user-modify: read-only;
}
</style>
