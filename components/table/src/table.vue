<template>
    <el-table class="web-table" :data="data" stripe header-cell-class-name="up3-custom-header-cell"
        cell-class-name="up3-custom-cell">
        <el-table-column v-for="(item, index) in columnData" :key="index" v-bind="item">
            <template #header="{ column }">
                <span class="text">{{ column.label }}</span>
            </template>
            <template #default="{ row, column }">
                <div class="operation" v-if="'操作' === column.label">
                    <!-- eslint-disable vue/no-v-text-v-html-on-component -->
                    <component v-text="item?.component?.text" :is="item?.component?.is" :class="item?.component?.class"
                        @click="() => handleOperation(row)" />
                    <!-- eslint-enabl -->
                </div>
            </template>
        </el-table-column>
    </el-table>
</template>

<script setup lang="ts" name="WebTable">
import {  defineProps, defineOptions, defineEmits } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus';
type component = { is: string; class?: string; text: string };
const { data, columnData } = defineProps<{
        data?: () => component[],
        columnData?: () => component[]
    }>();

defineOptions({
    name: 'WebTable'
});
const emit = defineEmits(['operation']);
const handleOperation = (row: typeof ElTableColumn & component) => {
    emit('operation', row);
};
</script>
<script lang='ts'>
export default {
    name: "WebTable"
}
</script>
<style lang="scss" scoped>
.web-table {
    width: 1400;
    max-height: 682px;
    min-height: 248px;
    border-radius: 12px 12px 0 0;

    &::before {
        display: none;
    }

    :deep(.el-table__header-wrapper) {
        height: 49px;

        .el-table__header {
            height: 100%;
            margin: 0;

            .el-table__cell {
                padding: 0;

                .cell {
                    font-weight: bold;
                    font-size: 18px;
                    color: #244367;
                    line-height: 25px;
                    text-align: center;
                    font-style: normal;
                    text-transform: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }

    :deep(.el-table__body-wrapper) {
        height: calc(100% - 49px);
        background: #f3f6f9;

        .el-table__header {}

        .el-scrollbar {
            height: 100%;

            .el-scrollbar__view {
                width: 100%;

                .el-table__body {
                    width: auto !important; // todo 为何组件内部会直接计算值
                }
            }
        }
    }

    &.el-table--striped {
        :deep(.el-table__header-wrapper) {
            .el-table__header {
                .el-table__cell {
                    background: #f3f6f9;
                }
            }
        }

        :deep(.el-table__body) {
            .el-table__row--striped {
                .el-table__cell {
                    background: #f7f8fc;
                }
            }
        }
    }
}
</style>
