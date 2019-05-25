const path = require("path")


module.exports = {
    mode: "development", //打包的方式 development / production
    entry:{ //指定打包的入口文件
        app:path.resolve(__dirname,"hello/main.js")
    },
    output: {
        filename: "app.bundle.js",
        path:path.resolve(__dirname,"hello/")
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                exclude:/node_modules/, //fs pipe
                loader:"style-loader!css-loader"
            }
        ]
    }
}
