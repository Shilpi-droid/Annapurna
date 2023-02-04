const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://Annapurna:shilpidhruv@cluster0.wc3bazh.mongodb.net/?retryWrites=true&w=majority")
        .then(()=>console.log("coonection successful...."))
        .catch((err)=>console.log(err)) ;

const Annapurna=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true,
            hidden:true
        },
        contact:{
            type:Number,
            required:true
        }
    }
)

const Users=new mongoose.model("Users",Annapurna);

const obj= new Users(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true,
            hidden:true
        },
        contact:{
            type:Number,
            required:true
        }
    }
)
