const fs = require('fs').promises
const express = require('express')
const server = require('./server')
const router = express.Router()

//routes

router.get('/', (req, res) => {
  fs.readFile('./data.json', 'utf-8')
    .then((data) => {
      return res.render('home', JSON.parse(data))
    })
    .catch((err) => {
      return res.status(500).send(err.message)
    })
})


router.get('/plants/:id', (req, res) => {
  const plant = Number(req.params.id)
  fs.readFile('./data.json', 'utf-8')
    .then((plants) => {
      const parsedData = JSON.parse(plants)
      const singlePlant = parsedData.plants.find((x) => x.id === plant)
      // console.log(plant)
      return res.render('plants', singlePlant)
    })
    .catch((err) => {
      return res.status(400).send(err.message)
    })
})

router.get('/comments/', (req, res) => {
  const plant = Number(req.params.id)
  fs.readFile('./data.json', 'utf-8')
    .then((plants) => {
      const parsedData = JSON.parse(plants)
      const singlePlant = parsedData.plants.find((x) => x.id === plant)
      return res.render('comments', singlePlant)
    })
    .catch((err) => {
      return res.status(400).send(err.message)
    })
})

// router.post('/comments/', (req, res) => {
// fs.writeFile('./comments.json', JSON.stringify(animals, null, 4))
   

//     .then(() => { return res.redirect('/puppies/' + id) })


//     .catch(err => {
//       return res.status(500).send(err.message)
//     })
// })


module.exports = router
