export const columnData = {
  xAxis: {
    type: 'category'
    // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  // 图标距离边界的位置
  grid: {
    left: '0',
    right: '0',
    top: '10%',
    bottom: '15%',
    containLabel: true
  },
  // 鼠标悬浮弹出框
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    y: '95%'
    // data: ['line1', 'line2', 'line3', 'line4', 'line5']
  },
  series: {
    smooth: true,
    data: []
  }
}
