const fs = require('fs').promises
const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
const routes = require('./routes')

const server = express()

// MIDDLEWARE

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({ extended: true }))

// ROUTES
server.use('/', routes)

module.exports = server
