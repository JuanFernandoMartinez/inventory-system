const express = require('express')
const pool = require('./src/database/connection')

const app = express()
app.get("/", async (req,res)=>{
    let response = await pool.pool.query("select * from campo")
    res.send(response.rows)
})

app.listen(3000,()=>{
    console.log(`server running on port 3000`)
})

