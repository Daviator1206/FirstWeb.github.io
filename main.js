const express = require("express")
const port = 8000;
const path = require("path")
const app = express()

app.use(express.urlencoded({extended:false}))

app.set("view engine", "ejs" )
// app.set("views", path.resolve("./views"))
app.use(express.static(path.join(__dirname, 'public')))

app.get("/",(req, res)=>{
    res.render("home")
})

app.listen(port, ()=>{
    console.log(`Server started at port number ${port}`)
})