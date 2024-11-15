<template>
  <el-form v-bind="attrs">
    <el-row v-for="(child, childIndex) in templateData" :gutter="20" :key="childIndex">
      <el-col v-for="(item, index) in child" :span="item.col || 12" :key="index">
        <el-form-item :label="item.label" :prop="item.prop">
          <Render
            v-if="typeof formData[0].render === 'function'"
            :render="formData[0].render"
            :formItem="formData[0]"
          ></Render>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { defineProps, PropType, toRefs } from 'vue'
import Render from './Render.js'
const props = defineProps({
  templateData: {
    type: Array as PropType<string[]>,
    default: () => []
  }
})
const templateData = toRefs(props)

const onSubmit = () => {
  console.log('submit!')
}
</script>
