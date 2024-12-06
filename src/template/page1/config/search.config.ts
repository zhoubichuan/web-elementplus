export const searchForm = [
  [
    {
      prop: 'name',
      label: '名称',
      type: 'input',
      component: {
        placeholder: '请输入'
      }
    },
    {
      prop: 'createBy',
      label: '创建人',
      type: 'input',
      component: {
        placeholder: '请输入'
      }
    },
    {
      prop: 'id',
      label: 'id',
      type: 'input',
      component: {
        placeholder: '请输入'
      }
    },
    {
      prop: 'createTime',
      label: '铸造时间',
      type: 'el-date-picker',
      component: {
        type: 'date',
        placeholder: '选择日期',
        format: 'YYYY-MM-DD'
      }
    }
  ]
]
