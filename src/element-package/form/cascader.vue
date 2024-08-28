<template>
    <el-row :gutter="20">
        <el-col :span="10">
            <div class="select-part" style="width:1200px;">
                <el-select v-model="formData2.type" placeholder="请选择类型" style="width: 100px">
                    <el-option v-for="(type, index) in linesType" :key="index" :value="type.desc" :label="type.desc">
                        {{ type.desc }}
                    </el-option>
                </el-select>
                <el-select v-model="formData2.type2" placeholder="请选择类型" style="width:100px">
                    <el-option v-for="(type, index) in siteType" :key="index" :value="type.desc" :label="type.desc">
                        {{ type.desc }}
                    </el-option>
                </el-select>
                <el-button>添加选择</el-button>
            </div>
            <div class="cascader-part">
                <el-cascader-panel :options="options2" :props="{ multiple: true }" clearable />
            </div>
        </el-col>
        <el-col :span="10">
            已选内容
            <el-button>取消选中</el-button>
            <div class="cascader-part">
                <el-cascader-panel :options="options2" :props="{ multiple: true }" clearable />
            </div>
        </el-col>
    </el-row>
</template>
<script setup lang="ts">
import { computed, reactive, ref, toRefs } from 'vue'
const formData2 = ref<any>()
const linesType = ref<Array<any>>([
    {
        value:'1',
        desc: '全部',
    },
    {
        value:'1',
        desc: '地铁',
    },
    {
        value:'1',
        desc: '公交',
    }
])
const siteType = ref<Array<any>>([
    {
        value:'1',
        desc: '全部',
    },
    {
        value:'1',
        desc: '车站',
    },
    {
        value:'1',
        desc: '车厢',
    }
])
const options2 = [
    {
        value: '1',
        label: '北京',
        children: [
            {
                value: '12',
                label: '地铁一号线',
                children: [
                    {
                        value: '123',
                        label: '车站一号广告位',
                    },
                ],
            },
            {
                value: '2',
                label: '上海',
                children: [
                    {
                        value: '21',
                        label: '地铁二号线',
                    },
                ],
            },
        ],
    },
]
</script>