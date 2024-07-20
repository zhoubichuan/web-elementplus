<template>
  <div>
    <el-row :gutter="20" v-if="formData.length >1">
      <el-col v-for="(n,key) in formData.length" :span="24/formData.length" :key="key">
        <el-form-item :label="formData[key].label" :prop="formData[key].prop" v-bind="$attrs">
          <Render v-if="typeof formData[key].render === 'function'" :render="formData[key].render" :formItem="formData[key]"></Render>
          <span v-else>{{formData[key].render}}</span>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20" v-else>
      <el-col :span="24">
        <el-form-item :label="formData[0].label" :prop="formData[0].prop">
          <Render v-if="typeof formData[0].render === 'function'" :render="formData[0].render" :formItem="formData[0]"></Render>
          <span v-else>{{formData[0].render}}</span>
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</template>
<script >
import Render from './Render.js'

export default {
  name: 'WebFormItem',
  components: {
    Render
  },
  props: {
    formData: {
      tyep: Array,
      default: () => []
    }
  }
}
</script>
