const express = require("express");
const multer = require("multer");
const uploadFile = require("");
const postModel = require("");
const cors = require("cors");

const app = express();
app.use{cors()}
app.use(express.json());

const upload = multer({storage:multer.memoryStorage()})

app.post('/create-post', upload.single("image"),async(req,res)=>{

})

app.get("/posts",async(req,res)=>{

})

module.exports=app;