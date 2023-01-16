const {UserModel}=require("../model/UserModel")
const login=async (req,res,next)=>{
    const {email,password}=req.body
    
        if(req.method=="POST" && req.url=="/login"){
            const data=await UserModel.find({email})
            if(data.length>0){
                next()
            }else{
               
                res.send("err")
            }
        }else{
            next()
        }
        

    
}
module.exports={
   
    login
}