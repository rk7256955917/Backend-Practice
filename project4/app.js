const express= require("express");
const app= express();
const userModel =require("../project4/models/user");
const postModel = require("../project4/models/post");

app.get("/",(req,res)=>{
    res.send("hello ji")
});
app.get("/create",async function (req,res){
        let user= await userModel.create({
            username:"rohit",
            age:23,
            email:"rohitkumar@gmail.com",
        });
        // console.log(user);
         res.send(user);
    });
app.get("/post/create",async function(req,res){
  let post = await postModel.create(
        {
            postdata:"hello sare log kaise hai",
            user:"6a6a4882b71566a15b487bd1",
});
 let user= await userModel.findOne({_id:"6a6a4882b71566a15b487bd1"});
 user.post.push(post._id);
await user.save(post);
res.send(user,post);
});
app.listen(3000,()=>{
    console.log("server is runnig on 3000");
})