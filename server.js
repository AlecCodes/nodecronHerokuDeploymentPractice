const express = require("express")
const app = express();
const PORT = process.env.PORT || 4001
const cron = require('node-cron')

cron.schedule("*/30 * * * * *" , () => {
    console.log("running a task every thirty seconds")
}) 

app.listen(PORT, () => console.log(`Turning up on port ${PORT}!!`))