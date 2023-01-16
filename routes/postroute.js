const express = require("express")

const {PostModel}=require("../model/PostModel")

const postRoute=express.Router()


postRoute.get("/",async (req,res)=>{
    try{
        let post = await PostModel.find()
        res.send({"seccuss":post})
    }catch(err){
        res.send({"err":"Something went wrong"})
    }
})
postRoute.post("/create",async (req,res)=>{
    const data = req.body
    try{
        let post = new PostModel(data)
        await post.save()
        res.send("Posted successfully")
    }catch(err){
        res.send({"err":"Something went wrong"})
    }
})

postRoute.patch("/update/:id",async (req,res)=>{
    const id = req.params.id
    const payload = req.body
    const post = await PostModel.findOne({ _id: id })
    const userID_in=post.userID
    const userID_req=req.body.userID 
    try {
        if (userID_req!==userID_in) {
            res.send("you are not Authorised")
        } else {
            await PostModel.findByIdAndUpdate({ _id: id }, payload)
            res.send("update")
        }

    } catch (err) {
        console.log(err)
        res.send("Something went wrong")
    }
})


postRoute.delete("/delete/:id",async (req,res)=>{
    
    const id=req.params.id
    const post=await PostModel.findOne({"_id":id})
    const userID_in=post.userID
    const userID_req=req.body.userID 
    try{
        if(userID_req!==userID_in){
            res.send("You are not authorized")
        }else{
            await PostModel.findByIdAndDelete({"_id":id})
            res.send("delete")
        }
    }
    catch(err){
      res.send(err)
    }
})
module.exports={
    postRoute
}