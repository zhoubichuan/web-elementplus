export const rules = {
  projectType: [{ required: true, message: '请选择关联项目', trigger: 'blur' }],
  modelId: [{ required: true, message: '请输入服装id', trigger: 'blur' }],
  ntfNum: [{ required: true, message: '请输入铸造数量', trigger: 'blur' }],
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  description: [{ required: true, message: '请输入说明', trigger: 'blur' }]
}
