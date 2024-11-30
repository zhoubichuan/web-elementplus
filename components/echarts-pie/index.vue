<template>
  <div ref="divRef" class="echarts-pie" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import deepmerge from 'deepmerge'
import * as echarts from 'echarts'
import { pieData } from './data'

export default defineComponent({
  props: ['options'],
  setup(props) {
    const divRef = ref()
    const reloadEcharts = () => {
      const myChart = echarts.init(divRef.value)
      myChart.setOption(deepmerge(pieData, props.options))
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
.echarts-pie {
  width: 100%;
  height: 100%;
}
</style>
