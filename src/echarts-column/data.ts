export const columnData = {
    title: {
        text: '虫子数量统计',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    // 图标距离边界的位置
    grid: {
        left: '3%',
        right: '4%',
        top: '18%',
        bottom: '3%',
        containLabel: true
    },
    // 设置x坐标轴
    xAxis: {
        type: 'category',
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
            alignWithLabel: true
        }
    },
    // 设置y坐标轴
    yAxis: {
        type: 'value'
    },
    // 设置内容
    series: []
}