const express = require('express')

const app = express()
const port = 8080 //must be replaced by env variable
app.get("/", (req,res)=>{
    res.send("Hello world")
})

app.listen(8080,()=>{
    console.log(`server running on port ${port}`)
})