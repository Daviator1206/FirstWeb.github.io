const express = require("express")
const port = 5500;
const path = require("path")
const app = express()
const userRoute = require("./routes/user")
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