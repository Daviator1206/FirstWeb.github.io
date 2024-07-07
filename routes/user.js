const express = require("express")
const router = express.Router()

router.get("/signin", (req, res)=>{
    return res.render("signin")
})
router.get("/signup", (req, res)=>{
    return res.render("signup")
})



module.exports = router;