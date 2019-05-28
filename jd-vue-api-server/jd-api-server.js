const express = require("express")
const path = require("path")
const router = express.Router()

const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json())


app.all("*",(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
    next()
})


router.get("/api/cartinfo",(req,res)=>{
    let cartInfo = require("./cartInfo")
    res.json(cartInfo)
})


app.use("/",router)

app.listen(3002,()=>{
    console.log("jd api server is ready on port 3002")
})
