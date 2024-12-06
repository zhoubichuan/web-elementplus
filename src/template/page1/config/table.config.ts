import { ITableConfig } from '@/api/type'

export const Confit: ITableConfig = {
  title: '',
  editWidth: '180',
  isEdit: true,
  needCreate: false,
  tableItems: [
    { prop: 'id', label: 'spuid', width: '90' },
    { prop: 'name', label: '名称', width: '120' },
    { prop: 'createTime', label: '铸造时间' },
    { prop: 'ntfNum', label: '铸造数量', width: '100', formatter: ({ ntfNum }: any) => ntfNum || '-' },
    {
      prop: 'stock',
      label: '库存',
      width: '120',
      formatter: ({ stock }: any) => stock || '-'
    },
    { prop: 'createBy', label: '创建人', width: '120', formatter: ({ createBy }: any) => createBy || '-' },
    {
      prop: 'ntfCreateStatus',
      label: '状态',
      width: '160',
      formatter(row: any) {
        const options = [
          { label: '铸造成功', value: '1' },
          { label: '铸造中', value: '2' },
          { label: '铸造失败', value: '3' }
        ]
        return options.find(item => item.value == row.ntfCreateStatus)?.label
      }
    }
  ]
}
export const DetailConfit: ITableConfig = {
  title: '',
  editWidth: '180',
  isEdit: false,
  needCreate: false,
  tableItems: [
    { prop: 'id', label: 'spuid', width: '90' },
    { prop: 'skuName', label: '名称', width: '120' },
    { prop: 'onChainTime', label: '上链时间' },
    { prop: 'modelPicture', label: '合约类型', width: '100' },
    { prop: 'token', label: 'token', width: '120' },
    { prop: 'walletAddress', label: '现存地址', width: '120' },
    { prop: 'owerId', label: '持有用户ID', width: '160' }
  ]
}
