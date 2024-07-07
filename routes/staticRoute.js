const express = require("express")
const User = require("../models/user")
const router = express.Router()

router.get("/", async(req, res)=>{
    if (!req.user) return res.redirect("/signup")
    const fullname = req.user.fullname
    res.render("home", {
        name: fullname
    })
})

router.get("/signin", (req, res)=>{
    res.render("signin")
})
router.get("/signup", (req, res)=>{
    res.render("signup")
})

module.exports = router