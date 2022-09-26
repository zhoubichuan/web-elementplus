import {ElMessage} from 'element-plus'
export default function (options: any) {
  return ElMessage(Object.assign({},{
    customClass: 'my-message', 
    showClose: true
  }, 
  options))
}
