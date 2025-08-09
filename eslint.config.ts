import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
        // 这里是自定义规则
        rules: {
            //'no-unused-vars': 'error', // 关闭未使用变量的警告
            // 'vue/no-unused-vars': 'error', // 关闭未使用变量的警告
            // 'no-undef': 'error', // 关闭未定义变量的警告
            'vue/multi-word-component-names': 'off', // 关闭组件名称必须是多词的规则
        },
    },

    globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended,
    skipFormatting,
)
