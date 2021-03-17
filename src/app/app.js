'use strict'
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
 
const app = express()

//TODO: Loading models
//********


//TODO: Loading routes
//********

// Encoding urls
app.use(bodyParser.urlencoded({ extended: true })) 
// Transform request´s body to json
app.use(bodyParser.json({
    limit: '5mb'
})) 

app.use(cors()) //ativar o cors

//TODO: Redirecting routes
//********
 
module.exports = app
