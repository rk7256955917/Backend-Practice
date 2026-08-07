const express = require("express");
const app = express();
const multer = require("multer");
app.set("view engine","ejs");


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads/");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});

const upload = multer({storage:storage});
app.use(express.static("uploads"));

// app.get("/",(req,res)=>{
//     res.render("index");
// })

app.post("/upload",upload.single("image"),(req,res)=>{
    console.log(req.file);
    
    res.render("index",{
        image:req.file.filename
    });
});

app.listen(3000,()=>{
    console.log(`server is running on 3000`);
}) 