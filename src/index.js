const express = require("express")
const mongoose = require("mongoose")
const os = require("os")
const app = express()

const DB_USER = "root"
const DB_PASSWORD = 1235679
const DB_HOST = "mongo"
const DB_PORT = 27017
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
mongoose.connect(URI).then(()=>{
    console.log("connect to database....")
}).catch(err=>{
    console.log("faild to connect"+err)
})

app.get("/",(req,res)=>{
    console.log("trafic from :"+os.hostname)
    res.send(`<h1>Hello every body </h1>`)
})

app.listen(4000, ()=>{
    console.log("the server runing on port 4000")
})