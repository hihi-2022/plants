const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')

const server = express()

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res) => {
  res.render('home')
})

module.exports = server
