const mongose = require("mongoose");
const userModel=require("./models/user")
mongose.connect("mongodb://localhost:27017/mongoDB").then(()=>{
    console.log("connected succesfuly")
}).catch(err=>{
    throw err}
)
const new_User=new userModel({
    nom:"Rayane",
    prenom:"Messelem",
    date:{
        jour:15,
        mois:09,
        anne:2003,
    },
    email:"rayane@gmail.com",
    mdp:"rayane",
})
new_User.save().then(doc=>{
    console.log(doc)
}).catch(err=>{
    throw err
})