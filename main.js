const express = require("express")
const mongoose = require("mongoose")
const port = 5500;
const path = require("path")
const app = express()
const userRoute = require("./routes/user")

mongoose.connect("mongodb://127.0.0.1:27017/hackerEarth")
.then(()=>{console.log("MongoDb successfully connected!")})
.catch((err)=>{console.log("something went wrong: ",err)})

app.use(express.urlencoded({extended:false}))

app.set("view engine", "ejs" )
// app.set("views", path.resolve("./views"))
app.use(express.static(path.join(__dirname, 'public')))

app.get("/",(req, res)=>{
    res.render("home")
})
app.use("/user",userRoute)

app.listen(port, ()=>{
    console.log(`Server started at port number ${port}`)
})