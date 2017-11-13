const express = require('express')
const router = express.Router()
const {MainApi} = require('../api')

router.get('/', async function(req, res, next) {
  const db = new MainApi()//database
  const {text} = await db.getMain()//get data
  res.json({text, message: 'This came from the api'})//respond with json {text, message}
})

module.exports = router

