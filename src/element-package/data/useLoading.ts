import { ElLoading } from "element-plus"

export const useLoading = () => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.5)'
  })
  return {loading}
}
