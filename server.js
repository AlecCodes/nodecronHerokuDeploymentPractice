const express = require("express")
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 4001
const cron = require('node-cron')
const dateReport = require("./Models/dateReport")


cron.schedule("0 8-16 * * *" , () => {
    const document = {reportDate: new Date()}
    dateReport.create(document)
    console.log("running a task every hour from 8-4pm")
}) 

app.listen(PORT, () => console.log(`Turning up on port ${PORT}!!`))