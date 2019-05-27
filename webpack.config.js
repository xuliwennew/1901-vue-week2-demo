const path = require("path")
const {} = require("vue-loader")


module.exports = {
    mode: "development", //打包的方式 development / production
    entry:{ //指定打包的入口文件
        app:path.resolve(__dirname,"hello/main.js")
    },
    output: {
        filename: "app.bundle.js",
        path:path.resolve(__dirname,"hello/")
    },
    resolve: {
        extensions: [".css",".js",".vue"]
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                exclude:/node_modules/, //fs pipe
                loader:"style-loader!css-loader"
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            }
        ]
    }
}
