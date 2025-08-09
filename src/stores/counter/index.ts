import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    // 声明state
    const count = ref(0)

    // 定义增加函数
    function increment() {
        count.value++
    }
    // 定义一个减少函数
    function decrement() {
        count.value--
    }
    // 声明msg
    const msg = ref('Hello, Pinia!')

    //
    return {
        count,
        msg,
        increment,
        decrement,
    }
    //
})
