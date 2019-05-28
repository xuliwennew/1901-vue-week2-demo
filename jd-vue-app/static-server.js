const express = require("express")
const path = require("path")
const router = express.Router()


const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use(express.static(__dirname))



app.use("/",router)

app.listen(3003,()=>{
    console.log("jd webapp static server is ready on port 3003")
})
