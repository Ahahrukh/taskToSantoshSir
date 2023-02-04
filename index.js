const express=require("express")
// const connection=require('./config/connection')
// const userRouter = require("./routes/user.route")
const fs=require('fs')
let app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("home")
})


app.get("/articles",(req,res)=>{
    let page=Number(req.query.page)
    let limit = Number(req.query.limit);
    let x=fs.readFileSync("task/data.json",{encoding:"utf-8"})
    let data=JSON.parse(x)
    var lim;
    if(!limit){
        lim=data.articles.length
    }else{
        lim=limit
    }
    //console.log(lim)
     res.send(data.articles.slice(page , lim))
    //res.json({'page':page , 'limit':limit})
})



app.listen(4000,()=>{
    
    console.log("connected with 4000")
})