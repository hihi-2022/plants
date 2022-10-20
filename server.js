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


//routes

//home path
server.get('/', (req, res) => {
  res.render('home')
})

//plant page path
server.get('/plants', (req, res) => {
  res.render('plants')
})

//specific page plant paths using ID tag handlebar
server.get('/plants/:id', (req, res) => {
  const id = (req.params.id - 1)
  const plantPath = plant[id]
  res.render('plants' , plantPath)
})

//Key path
server.get('/key', (req, res) => {
  res.render('key')
})


module.exports = server
