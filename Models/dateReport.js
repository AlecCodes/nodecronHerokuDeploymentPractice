const mongoose = require("./connection")

const dateReportSchema = new mongoose.Schema({
    reportDate: Date
})

const dateReport = mongoose.model("dateReport", dateReportSchema)

module.exports =  dateReport