const express = require("express")
const router = express.Router()
const {v4 : uuidv4} = require("uuid")
const User = require("../models/user")
const {getUser, setUser} = require("../services/auth")
// router.get("/signin", (req, res) => {
//     return res.render("signin")
// })
// router.get("/signup", (req, res) => {
//     return res.render("signup")
// })


router.post("/signin", async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email, password })
    if (!user) return res.render("signup", { error: "Invalid mail or password" })
    const sessionId = uuidv4()
    setUser(sessionId, user)
    res.cookie("uid", sessionId)
    res.redirect("/")
})

router.post("/signup", async (req, res) => {
    const { fullname, email, password } = req.body
    await User.create({
        fullname,
        email,
        password
    })
    res.redirect("/signin")
})
router.get("/logout", (req, res)=>{
    res.clearCookie("uid").redirect("/signin")
})


module.exports = router;