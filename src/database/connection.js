const pg = require("pg")
require('dotenv').config()


const pool  = new pg.Pool({
  user: process.env.DATABASE_USER,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_DATABASE,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
})



    



module.exports.pool = pool