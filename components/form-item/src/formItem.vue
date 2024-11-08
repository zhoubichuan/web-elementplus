<template>
  <div>
    <el-row :gutter="20" v-if="formData.length > 1">
      <el-col v-for="(n, key) in formData.length" :span="24 / formData.length" :key="key">
        <el-form-item :label="formData[key].label" :prop="formData[key].prop" v-bind="$attrs">
          <Render v-if="typeof formData[key].render === 'function'" :render="formData[key].render"
            :formItem="formData[key]"></Render>
          <component v-else-if="formData[key].component" v-bind="formData[key].component"
            :is="formData[key].component.is || 'web-input'" />
          <span v-else>{{ formData[key].render }}</span>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-else>
      <el-col :span="24">
        <el-form-item :label="formData[0]?.label" :prop="formData[0].prop">
          <Render v-if="typeof formData[0].render === 'function'" :render="formData[0].render" :formItem="formData[0]">
          </Render>
          <component v-else-if="formData[0].component" v-bind="formData[0].component"
            :is="formData[0].component.is || 'web-input'" />
          <span v-else>{{ formData[0].render }}</span>
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import Render from '../../Render.js'
const { formData } = defineProps<{
  formData: {
    type: Array,
    default: () => []
  }
}>()
</script>
<script lang='ts'>
export default {
  name: "WebFormItem"
}
</script>