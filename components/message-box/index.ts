import {ElMessageBox} from 'element-plus'
export default function(content: string, title: string, options?: any) {
  return ElMessageBox.confirm(
    content,
    title,
    Object.assign({}, {
      customClass: 'my-message-box',
      cancelButtonClass: 'my-message-box-btn-cancel',
      confirmButtonClass: 'my-message-box-btn-confirm',
      confirmButtonText: '保存',
      cancelButtonText: '取消',
      type: 'warning',
    }, options)
  )
}