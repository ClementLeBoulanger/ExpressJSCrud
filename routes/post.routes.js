const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  res.json({message: 'Requete GET passée avec succès'})
})

router.post('/', (req, res) => {
  res.json({message: req.body.message + ' posté par ' + req.body.author})
})


module.exports = router
