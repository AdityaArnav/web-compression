const express = require("express");

const app = express();
const port =8080;


const userSignUp= require("./signup");
const db = require("./db")
app.use(express.json())
app.use("/auth",userSignUp);
app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
console.log(`server listening on ${port}`)
})