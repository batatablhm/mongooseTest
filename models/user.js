const mongose=require("mongoose");
const validator=require("validator")
const userSchema=new mongose.Schema({
    nom:{ type:String ,
        required:true,
        validate:(value)=>{
            return value.length>0
        },
    },
    prenom:{
        type:String ,
        required:true,
        validate:(value)=>{
            return value.length>0
        },
    },
    date:{
        jour:{
            type:Number ,
            required:true,
            validate:(value)=>{
            return value<=31
        },
        },
        mois:{
            type:Number ,
            required:true,
            validate:(value)=>{
            return value<=12 && value>0;
        },
        },
        anne:{
            type:Number ,
            required:true,
            validate:(value)=>{
            return value<=2004 && value>=1900;
        },
        },
    },
    email:{
        type:String ,
        required:true,
        validate:(value)=>{
            return validator.isEmail(value)
        },
    },
    mdp:{
        type:String ,
        required:true,
        validate:(value)=>{
            return validator.isAlphanumeric(value)
        },
    },})
module.exports=mongose.model("user",userSchema);