const Vue = require("vue")
//vue ssr compiler
const renderer = require("vue-server-renderer").createRenderer()


let app = new Vue({
    el:"#app",
    template:`<h1>vue ssr content</h1>`
})


//renderer把app 生成为html string

renderer.renderToString(app).then(html=>{
    console.log(html)
}).catch(error=>{
    console.log(error)
})
