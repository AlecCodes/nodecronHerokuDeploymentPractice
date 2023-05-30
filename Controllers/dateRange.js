const express = require("express")
const dateReport = require("../Models/dateReport")

const router = express.Router();

router.get("/", (req,res) => {
    res.json('GET ROUTE XD!!!')
})

module.exports = router;
