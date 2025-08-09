<template>
    <div class="test">
        <h3>Test Page</h3>
        <div class="test-content">
            <el-button type="primary" @click="handleAdd">增加</el-button>
            <p class="text-counter">当前计数: {{ counterStore.count }}</p>
            <el-button type="success" @click="counterStore.decrement">减少</el-button>
        </div>
        <hr />
        <div class="chennal">
            <el-button type="warning" style="margin-bottom: 8px" @click="channelStore.getList"
                >获取频道</el-button
            >
            <el-table
                :data="channelStore.channelList"
                :default-sort="{ prop: 'date', order: 'descending' }"
                style="width: 100%"
            >
                <el-table-column prop="id" label="ID" sortable width="180" />
                <el-table-column prop="name" label="名称" width="280" />
                <el-table-column label="Operations">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.row.id, scope.row)"
                            >Edit</el-button
                        >
                        <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(scope.row.id, scope.row)"
                            >Delete</el-button
                        >
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import { useChannelStore } from '@/stores/channel'

import type { Channel } from '@/types/channel'

// 实例化仓库
const counterStore = useCounterStore()
const channelStore = useChannelStore()

const handleAdd = () => {
    console.log('Button clicked!')
    counterStore.increment()
}

// 处理编辑
const handleEdit = (id: string, row: Channel) => {
    console.log('Edit clicked for ID:', id, row)
}
const handleDelete = (id: string, row: Channel) => {
    console.log('Delete clicked for ID:', id, row)
    channelStore.deleteChannel(id)
}
</script>

<style scoped>
.test {
    padding: 20px;
    background-color: #c5c5c5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.test-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    justify-content: center;
}
.text-counter {
    width: 100px;
    text-align: left;
}
</style>
