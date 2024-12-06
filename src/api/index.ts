import request from 'axios'
import { NftCreateType, NftEditType, NftListType, NftDetailType } from './type'
const ShunLuAPI = {}
// 创建
export const CreateApi = (param: NftCreateType.RequestParams): Promise<NftCreateType.ResponseData> => {
  return request.post(ShunLuAPI.CreateUrl, param)
}
// 编辑
export const EditApi = (param: NftEditType.RequestParams): Promise<NftEditType.ResponseData> => {
  return request.post(ShunLuAPI.EditUrl, param)
}
// Property 创建
export const PropertyCreateApi = (param: NftCreateType.RequestParams): Promise<NftCreateType.ResponseData> => {
  return request.post(ShunLuAPI.PropertyCreateUrl, param)
}
// Property 编辑
export const PropertyEditApi = (param: NftEditType.RequestParams): Promise<NftEditType.ResponseData> => {
  return request.post(ShunLuAPI.PropertyEditUrl, param)
}
// 搜索
export const ListApi = (param: NftListType.RequestParams): Promise<NftListType.ResponseData> => {
  return request.post(ShunLuAPI.ListUrl, param)
}
// 详情
export const DetailApi = (params: NftDetailType.RequestParams): Promise<NftDetailType.ResponseData> => {
  const { id } = params
  return request.get(ShunLuAPI.DetailUrl + id)
}
// Property 详情
export const PropertyDetailApi = (params: NftDetailType.RequestParams): Promise<NftDetailType.ResponseData> => {
  const { id } = params
  return request.get(ShunLuAPI.PropertyDetailUrl + id)
}
//明细列表
export const DetailListApi = (params: any): Promise<NftDetailType.ResponseData> => {
  const { id, ...rest } = params
  return request.get(ShunLuAPI.DetailListUrl + id, { params: rest })
}
//明细详情
export const getNftListDetail = (params?: any): Promise<NftDetailType.ResponseData> => {
  return request.get(ShunLuAPI.DetailListUrl + `?${new URLSearchParams(params as any).toString()}`)
}

//树
export const getNftTree = (params: NftDetailType.RequestParams): Promise<NftDetailType.ResponseData> => {
  return request.get(ShunLuAPI.Tree, { params })
}
//场景
export const getNftScenarios = (): Promise<NftDetailType.ResponseData> => {
  return request.get(ShunLuAPI.Scenarios)
}

// 模型
export const getModels = (params: any): Promise<NftDetailType.ResponseData> => {
  return request.get(ShunLuAPI.Models, { params })
}
//获取场景
export const GetScenarios = (): Promise<NftDetailType.ResponseData> => {
  return request.get(ShunLuAPI.GetScenarios)
}

//删除模型
export const delModel = (id: number): Promise<NftDetailType.ResponseData> =>
  request.post(ShunLuAPI.DeleteUserRole + `?id=${id}`)

export interface IModelTypeItem {
  value: number
  desc: string
}
//服饰类型
export const modelType = (): Promise<NftDetailType.ResponseData> => request.get(ShunLuAPI.TypeUserRole)
