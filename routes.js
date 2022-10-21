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

router.get('/plants/', (req, res) => {
  res.render('plants')
})

router.get('/plants/:id', (req, res) => {
  const plant = Number(req.params.id)
  fs.readFile('./data.json', 'utf-8')
    .then((plants) => {
      const parsedData = JSON.parse(plants)
      const singlePlant = parsedData.plants.find((plant) => plant.id === plant)
      console.log(plants.id)
      return res.render('plants', singlePlant)
    })
    .catch((err) => {
      return res.status(400).send(err.message)
    })
})

// update this for comments page
// router.post('/:id/comment', (req, res) => {
//   const id = Number(req.params.id)
//   const comments = req.body.comments

//   fs.readFile('./data.json', 'utf-8')
//     .then((plants) => {
//       const plantsCopy = JSON.parse(plants)

//       const specificPlant = plantsCopy.plants.find((plants) => {
//         return plants.id === id
//       })
//       specificPlants.comments = newComments
//       return newComments
//     })
//     .then((comments) => {
//       return fs.writeFile('./comments.json', JSON.stringify(plants, null, 4))
//     })
//     .then(() => {
//       return res.redirect('/plants/' + id)
//     })
//     .catch((err) => {
//       return res.status(500).send(err.message)
//     })
// })

module.exports = router
