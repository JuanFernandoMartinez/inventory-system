const express = require('express')
const pool = require('./src/database/connection')

const app = express()
app.get("/", (req,res)=>{
    
    res.send(`okay ${req.ip}`)
})

app.listen(3000,()=>{
    console.log(`server running on port 3000`)
})

