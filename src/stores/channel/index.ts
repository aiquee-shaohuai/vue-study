import { defineStore } from 'pinia'
import { ref } from 'vue'

import axios from 'axios'

import type { Channel } from '@/types/channel'

//定义channel类型

// Define a store for managing channels
export const useChannelStore = defineStore('channel', () => {
    //定义列表
    const channelList = ref<Channel[]>([])

    //获得数据
    const getList = async () => {
        await axios
            .get('https://geek.itheima.net/v1_0/channels')
            .then((res) => {
                channelList.value = res.data?.data.channels
            })
            .catch((error) => {
                console.error('Error fetching channels:', error)
            })
    }
    //删除频道
    const deleteChannel = (id: string) => {
        channelList.value = channelList.value.filter((channel) => channel.id !== id)
    }
    //返回输出
    return {
        channelList,
        getList,
        deleteChannel,
    }
})
