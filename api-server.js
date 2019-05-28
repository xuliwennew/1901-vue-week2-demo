const express = require("express")
const path = require("path")
const router = express.Router()

const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json())

const users = require("./data/users")

app.all("*",(req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
    next()
})

//RESTFUL API api风格 method=get post

// get post put delete 用户的管理 CURD

router.get("/users/get",(req,res)=>{

    res.jsonp(users)
})

router.post("/user/add",(req,res)=>{
    let data = req.body
    console.log(data)
    res.json(data)
})

router.delete("/user/del",(req,res)=>{
    console.log(req.body)
    let {id} = req.body;
    res.json(users.splice(id,1))
})


router.put("/user/update",(req,res)=>{
    res.json({code:"update success"})
})



// router.get("/user/:id",(req,res)=>{
//     // req.query params
//     console.log(req.params)
//     res.json(users[req.params.id])
// })



router.get("/",(req,res)=>{
    res.json({
        code:3000
    })
})


app.use("/",router)

app.listen(3001,()=>{
    console.log("server is ready on port 3001")
})
