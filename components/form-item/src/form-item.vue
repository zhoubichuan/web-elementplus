<template>
  <div>
    <el-row v-if="formData.length">
      <el-col :span="12" v-for="(item, index) in formData" :key="index">
        <el-form-item :label="item.label" :prop="item.prop" v-if="item.type">
          <component :is="item.type" v-bind="item.component" v-model="formModel[item.prop]">
          </component>
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
    cascader: defineAsyncComponent(() => import(`../../cascader/index`))
  }
})

</script>