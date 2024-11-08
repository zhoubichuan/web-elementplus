<template>
  <div ref="divRef" class="echarts-line" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import deepmerge from 'deepmerge'
import * as echarts from 'echarts'
import { columnData } from './data'

export default defineComponent({
  props: ['options'],
  setup(props) {
    const divRef = ref()
    const reloadEcharts = () => {
      const myChart = echarts.init(divRef.value)
      myChart.setOption(deepmerge(columnData, props.options))
    }
    onMounted(() => {
      reloadEcharts()
    })
    watch(props, () => {
      reloadEcharts()
    })
    return {
      divRef
    }
  }
})
</script>

<style lang="scss" scoped>
.echarts-line {
  width: 100%;
  height: 100%;
}
</style>
