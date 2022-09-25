/*
 * @Author: your name
 * @Date: 2022-01-24 16:34:23
 * @LastEditTime: 2022-01-29 12:03:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3-share/components/my-message-box/index.js
 */

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