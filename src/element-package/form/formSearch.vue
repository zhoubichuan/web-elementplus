<template>
    <el-card class="page-search" style="margin-top: 10px">
        <el-form size="small" ref="searchInfoRef" :model="getTopicParam" label-width="120px">
            <el-row :gutter="20">
                <el-col :span="200">
                    <el-form-item label="名称" label-width="40px">
                        <el-input v-model="getTopicParam.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="200">
                    <el-form-item label="创建人" label-width="60px">
                        <el-input v-model="getTopicParam.creatorName" />
                    </el-form-item>
                </el-col>
                <el-col :span="250">
                    <el-form-item label="spuid" label-width="80px">
                        <el-input v-model.number="getTopicParam.spuid" />
                    </el-form-item>
                </el-col>
                <el-col :span="350">
                    <el-form-item label="铸造时间" label-width="80px">
                        <el-date-picker @change="chooseTime" v-model="time" type="date" placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <!-- 查询 重置按钮 -->
                <el-col :offset="1" :span="200" style="width: 100%;">
                    <el-button @click="formCreate" size="mini" type="success">创建NFT</el-button>
                    <div style="float: right;">
                        <el-button :icon="Refresh" @click="resetSearchForm" size="mini">重置</el-button>
                        <el-button :icon="Search" @click="handlerSearch" size="mini" type="primary">查询</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-form>
    </el-card>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Refresh, Search } from '@element-plus/icons-vue'
import { getNftList } from '@/api/nft'
import { IUserRoleItem } from '@/api/type'
import { useBaseTableByApi } from '@/components/BaseTable/hooks/useBaseTableByApi'
import { ElForm } from 'element-plus'
import dayjs from 'dayjs'
const { formCreate } = defineProps<{ formCreate: Function }>()
const time = ref('')
const chooseTime = (res: any) => {
    getTopicParam.startTime = res ? dayjs(res).valueOf() + '' : undefined
}
// 查询参数
const getTopicParam = reactive<Record<string, string | number | undefined>>({
    currentPage: 1,
    pageSize: 20,
    name: '',
    creatorName: '',
    spuid: '',
    startTime: '',
})
const { reloadData } = useBaseTableByApi<IUserRoleItem>(getNftList, getTopicParam)
const handlerSearch = () => {
    reloadData()
}
const resetSearchForm = () => {
    Object.keys(getTopicParam).forEach(key => {
        getTopicParam[key] = ''
    })
    reloadData()
}

</script>
<style lang="scss" scoped></style>