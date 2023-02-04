const express=require("express")
// const connection=require('./config/connection')
// const userRouter = require("./routes/user.route")
const fs=require('fs')
let app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("home")
})

app.get("/articles?page",(req,res)=>{
    let {pag}=req.params
    let x=fs.readFileSync("task/data.json",{encoding:"utf-8"})
    let data=JSON.parse(x)
    // res.send(page)
    console.log(req.params)
})

app.listen(4000,async()=>{
    // try{
    //    await connection
    //    console.log("connected")
    // }catch(err){
    //     console.log(err)
    // }
    console.log("connected with 4000")
})