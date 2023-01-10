<template>
  <div ref="divRef" class="echarts-column" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import { columnData } from './data'

export default defineComponent({
  props: ['options'],
  setup(props) {
    const divRef = ref()
    const reloadEcharts = () => {
      const myChart = echarts.init(divRef.value)
      myChart.setOption({...columnData, ...props.options})
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

<style lang="less" scoped>
.echarts-column {
  width: 100%;
  height: 100%;
}
</style>
