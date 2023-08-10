const express = require('express')
const cors = require('cors')

const routes = require('./routes/router')
const db = require('./database')

const app = express()
db.connect()

app.use(
    cors(),
    express.json(),
    routes
)

module.exports = app