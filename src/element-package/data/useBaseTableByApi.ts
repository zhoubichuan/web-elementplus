import { useLoading } from './useLoading'
import { ElMessage } from 'element-plus'
import { reactive, ref, onMounted } from 'vue'
/**
 *
 * @param getDataApi 请求table数据的api
 * @queryParam 请求table数据的参数
 * @param deletedApi 删除项目的 接口
 * @returns
 */
const cleanEmptyKey = (obj: { [key: string]: any }) => {
  const target = { ...obj }
  for (const key in obj) {
    if (obj[key] !== 0 && obj[key] !== false && !obj[key]) {
      delete target[key]
    }
  }
  return target
}
export const useBaseTableByApi = <T = any>(
  getDataApi: (param: any) => Promise<IResponseData<IPageData<T>>>,
  queryParam?: Record<string, any>,
  deletedApi?: (id: number) => Promise<IResponseData<null>>
) => {
  // 分页数据
  const pageInfo = reactive<IPageInfo>({
    currentPage: 1,
    pageSize: 20,
    totalCount: 100
  })

  // table 所需数据
  const tableData = ref<Array<T>>()
  const isLoading = ref<boolean>(true)

  // 刷新数据
  const reloadData = () => {
    const { loading } = useLoading()
    const clearObj = cleanEmptyKey(queryParam ?? {})
    const hasQueryParam = Object.keys(clearObj).length !== 0
    // 有请求参数就不带分页参数
    const param = hasQueryParam
      ? clearObj
      : { currentPage: pageInfo?.currentPage ?? 1, pageSize: pageInfo?.pageSize ?? 20 }
    const bodyParams = { currentPage: pageInfo?.currentPage ?? 1, pageSize: pageInfo?.pageSize ?? 20, ...clearObj }
    isLoading.value = true
    console.log(param)
    console.log(`output->bodyParams`, bodyParams)
    getDataApi(bodyParams)
      .then(res => {
        const { c, d } = res
        if (c !== 200) return ElMessage.warning('请求数据出错')
        pageInfo.totalCount = d.totalCount
        pageInfo.pageSize = d.pageSize
        pageInfo.currentPage = d.currentPage
        tableData.value = d.result
      })
      .finally(() => {
        loading.close()
        isLoading.value = false
      })
  }

  const toEdit = (data: any) => {
    console.log(data)
  }

  const toDelete = (deleteId: number) => {
    console.log(deleteId)
    if (deletedApi) {
      deletedApi(deleteId).then(() => reloadData())
    }
  }

  const toCreate = (data: { [key: string]: any }) => {
    const createObj = { ...data }
    // 删除id,新增不需要id
    delete createObj.id
    console.log({ ...createObj })
  }

  const handleSizeChange = (pageData: IPageInfo) => {
    pageInfo.pageSize = pageData.pageSize
    reloadData()
  }

  const handleCurrentChange = (pageData: IPageInfo) => {
    pageInfo.currentPage = pageData.currentPage
    reloadData()
  }
  onMounted(() => {
    reloadData()
  })
  return {
    toEdit,
    toDelete,
    toCreate,
    handleSizeChange,
    handleCurrentChange,
    pageInfo,
    reloadData,
    tableData,
    isLoading: isLoading.value
  }
}
