module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ],
        // 'vue/script-indent': [
        //     'error',
        //     4,
        //     {
        //         baseIndent: 0,
        //         switchCase: 0,
        //         ignores: []
        //     }
        // ],
        // indent: ['error', 4]
        indent: 0,
        '@typescript-eslint/no-var-requires': 0,
        'vue/valid-v-for': 0,
        'vue/no-setup-props-destructure': 0
    }
}
