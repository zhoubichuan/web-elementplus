<template>
  <div class="container">
    <div class="header" v-if="header">
      <el-breadcrumb separator="/" v-if="header.breadcrumb">
        <el-breadcrumb-item
          v-for="(x, k) in header.breadcrumb"
          :to="{
            path: x.path,
            query: x.query
          }"
          :key="k"
        >
          {{ x.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div v-if="options && options.length" class="options">
        <template v-for="(x, k) in options">
          <web-button
            :key="k"
            v-if="x.type === 'button'"
            type="primary"
            size="medium"
            @click="x.onClick"
          >
            {{ x.label }}
          </web-button>
        </template>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  props: ['header'],
  setup(props) {
    const state = reactive({
      options: props.header.options
    })
    const setOptions = (arr) => {
      state.options = arr
    }
    return {
      ...toRefs(state),
      setOptions
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  padding-top: 0;
  height: 100%;
  // min-width: 1550px;
}
.header {
  padding: 32px 0 16px;
  position: relative;
  font-size: 16px;
  .options {
    position: absolute;
    right: 20px;
    top: 12px;
  }
}
.content {
  height: calc(100vh - 80px);
  background: #ffffff;
  padding: 32px 24px;
  box-sizing: border-box;
  border-radius: 8px;
}
</style>
<style>
.el-breadcrumb__inner.is-link {
  color: #86868b;
  font-weight: 400;
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner {
  color: #1d1d1f;
  font-weight: 400;
}
</style>
