const express = require('express')
const { getAllMovies, getSingleMovie, addSingleMovie, deleteSingleMovie, updateSingleMovie } = require('../controllers/movie-controller')

// middlwares
const verifyJWT = require('../middlewares/verifyJWT')
const rbac = require('../middlewares/rbac')

const router = express.Router()

// get all the movies
router.get('/' , getAllMovies)

// get single movie 
router.get('/:id' , getSingleMovie)

// add a single movie ( admin only )
router.post('/add' , verifyJWT , rbac.checkPermission("add_single_movie") , addSingleMovie)

// delete a single movie ( admin only )
router.delete('/:id' , verifyJWT , rbac.checkPermission("delete_single_movie") , deleteSingleMovie)

// update single movie ( admin only )
router.put('/:table' , verifyJWT , rbac.checkPermission("update_single_movie") , updateSingleMovie)


module.exports = router