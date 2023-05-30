const express = require("express")
const dateReport = require("../Models/dateReport")

const router = express.Router();

router.get("/", (req,res) => {
    res.json('GET ROUTE XD!!!')
})

//date range endpoint
router.get('/:start/:end', async (req,res) => {
    try{
        res.json(await dateReport.find(
            {reportDate: {$gte: req.params.start , $lte: req.params.end}}
            )
        )
    } catch(error){
        res.status(400).json(error)
    }

})

module.exports = router;
