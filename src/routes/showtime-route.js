const express = require('express')
const { slotTheaterController, slotMovieController } = require('../controllers/showtime-controller')


const router = express.Router()

router.get('/theater' , slotTheaterController)

router.get('/movie' , slotMovieController)

module.exports = router