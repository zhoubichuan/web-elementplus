import {ElMessage} from 'element-plus'
export default function (options: any) {
  return ElMessage(Object.assign({},{
    customClass: 'web-message', 
    showClose: true
  }, 
  options))
}
