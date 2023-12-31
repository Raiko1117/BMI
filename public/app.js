const cors = require('cors')
const {json} = require("express");


const home = require('./routers/home')
const calculation = require('./routers/bmicalculator')

const express = require('express')
const app = express()

app.use(cors())
app.use(json())
app.use('/', home)
app.use('/',calculation)

const port = 3000
app.listen(port)
