
const {UserModel}=require("../model/UserModel")
const validet= async (req,res,next)=>{
    const id=req.params.id
  if(req.method=="DELETE"){
    const data=await UserModel.find({_id:id})
    const verify=data[0]
    if(verify.Role=="Admin"){
       next()
    }else{
       res.send("not able to delete")
    }
  }
     const data=await UserModel.find({_id:id})
     const verify=data[0]
     if(verify.Role=="Admin"){
        next()
     }else{
        res.send("not able to delete")
     }
     console.log(verify.Role)
   
       res.send("Err")
}

module.exports={
    validet
}