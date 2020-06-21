
const glob = require('glob')
const titles = require('./title.js')

// 统一配置多页
const pages = {}
glob.sync('./src/pages/**/main.js').forEach(filePath => {
    let chunk = filePath.split('./src/pages/')[1].split('/main.js')[0]
    pages[chunk] = {
        entry: filePath,
        template: 'public/index.html',
        title: titles[chunk],
        chunks: ['chunk-vendors', 'chunk-common', chunk]
    }
})
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/my-app/'
        : '/',
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        performance: {
            hints:'warning',
            //入口起点的最大体积
            maxEntrypointSize: 50000000,
            //生成文件的最大体积
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith('.js');
            }
        }
    },
    pages
}
// module.exports = {
//     devServer: {
//         proxy: 'http://localhost:80'
//     }
// }
