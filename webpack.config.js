const path = require("path")
//csr ssr
const {VueLoaderPlugin} = require("vue-loader")


module.exports = {
    mode: "development", //打包的方式 development / production
    entry:{ //指定打包的入口文件
        app:path.resolve(__dirname,"jd-vue-app/main.js")
    },
    output: {
        filename: "app.bundle.js",
        path:path.resolve(__dirname,"jd-vue-app/")
    },
    resolve: {
        extensions: [".css",".js",".vue"]
    },
    module: {
        rules: [
            {
                test:/\.css$/,

                loader:"style-loader!css-loader"
            },
            {
                //vue-loader
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.(png|gif|jpg)$/,
                loader:"url-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
