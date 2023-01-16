
const express=require("express");
const { connection } = require("./config/db");
const {usersRoute}=require("./routes/userRoute")
const {postRoute}=require("./routes/postroute")

const{authenticate}=require("./middleware/auth")

const {validet}=require("./middleware/validate")
const {login}=require("./middleware/login")
const cors=require("cors")
const app=express()

app.use(express.json())
app.use(cors())

require('dotenv').config()

app.get("/",(req,res)=>{
    res.send("welcome to home page")
})
app.use(authenticate)
app.use(login)
app.use("/users",usersRoute)
app.use(validet)

app.use("/posts",postRoute)

app.listen(process.env.port, async ()=>{
    try{
        await connection;
        console.log("connected to db")

    }catch(er){
        console.log(er)
    }
    console.log(`server is running in port ${process.env.port}`)
})