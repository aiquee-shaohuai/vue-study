<template>
    <div class="app">
        <h3>我是主页</h3>
        <h5>当前计数: {{ counterStore.count }}</h5>
        <Test />
    </div>
</template>

<script lang="ts" setup>
import Test from '@/views/test/TestPage.vue'

import { useCounterStore } from '@/stores/counter'

// 实例化仓库
const counterStore = useCounterStore()
</script>

<style scoped>
.app {
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
