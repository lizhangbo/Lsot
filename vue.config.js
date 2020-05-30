module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/my-app/'
        : '/',
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    }
}
// module.exports = {
//     devServer: {
//         proxy: 'http://localhost:80'
//     }
// }
