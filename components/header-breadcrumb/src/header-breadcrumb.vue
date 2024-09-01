<template>
  <div class="headerBreadcrumb">
    <template v-for="(item, index) in breadcrumbList" :key="item.name">
      <div :class="index === breadcrumbList?.length - 1 ? 'breadcrumb_end' : 'breadcrumb'">
        <a v-if="index !== 0" :href="item.path">{{ item.name }}</a>
        <span v-else>{{ item.name }}</span>
      </div>
      <span class="cut" v-if="index !== breadcrumbList?.length - 1">/</span>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    breadcrumbList: {
      type: Array as PropType<{ name: string; path: string }[]>,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.headerBreadcrumb {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  display: flex;
  line-height: 62px;
  padding: 0 20px;
  background: #fff;
  border-bottom: 1px solid #f2f2f2;
  font-size: 16px;
  span {
    cursor: pointer;
  }
  .breadcrumb {
    font-weight: bold;
    color: #86868b;
  }
  .cut {
    margin: 0 8px;
  }
  .breadcrumb_end {
    font-weight: bold;
    color: #1d1d1f;
  }
}
</style>
