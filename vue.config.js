const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://codercba.com:5000',
                pathRewrite: {
                    '^/api': ''
                },
                changeOrigin: true,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }
        }
    },
    transpileDependencies: true
})
