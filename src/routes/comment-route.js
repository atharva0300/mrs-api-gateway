const express = require('express')
const { createCommentController, getCommentsByMovieController, updateCommentController, deleteCommentController } = require('../controllers/comment-controller')
const router = express.Router()

// middlewares
const verifyJWT = require('../middlewares/verifyJWT')
const verifyAdmin = require('../middlewares/verifyAdmin')
const verifyUser = require('../middlewares/verifyUser')
const rbac = require('../middlewares/rbac')

router.post('/' , verifyJWT , rbac.checkPermission("post_comment") , createCommentController)

router.get('/:id' , getCommentsByMovieController)

router.patch('/:id/:userId' , verifyJWT , rbac.checkPermission("update_comment") , updateCommentController)

router.delete('/:id/:userId' , verifyJWT , rbac.checkPermission("delete_comment") , deleteCommentController)


module.exports = router