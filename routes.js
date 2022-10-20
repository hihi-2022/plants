const fs = require('fs').promises
const express = require('express')
const router = express.Router()

//routes

router.get('/plants/:id', (req, res) => {
  const id = Number(req.params.id)
  fs.readFile('./data.json', 'utf-8')
    .then((data) => {
      const parsedData = JSON.parse(data)
      const singlePlant = parsedData.plant.find((plant) => plant.id === id)
      return res.render('plants', singlePlant)
    })
    .catch((err) => {
      return res.status(400).send(err.message)
    })
})

router.post('/:id/edit', (req, res) => {
  const id = Number(req.params.id)
  // const newBreed = req.body.breed
  // const newName = req.body.name
  // const newOwner = req.body.owner

  fs.readFile('./data.json', 'utf-8')
    // .then(animals => {
    //   const animalsCopy = JSON.parse(animals)

    //   const onePup = animalsCopy.puppies.find(animal => {
    //   return animal.id === id
    // })
    //   onePup.owner = newOwner
    //   onePup.name = newName
    //   onePup.breed = newBreed
    //   return animalsCopy
    // })
    // .then(animals => {
    // return fs.writeFile('./data.json', JSON.stringify(animals, null, 4))
    // })
    // .then(() => { return res.redirect('/puppies/' + id) })
    .catch((err) => {
      return res.status(400).send(err.message)
    })
})

module.exports = router
