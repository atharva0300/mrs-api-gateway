const express = require('express')
const { bookBulkTicketController } = require('../controllers/booking-controller')
const router = express.Router()

// middlewares
const verifyJWT = require('../middlewares/verifyJWT')
const verifyUser = require('../middlewares/verifyUser')
const rbac = require('../middlewares/rbac')


router.post('/' , verifyJWT , rbac.checkPermission("book_ticket") , bookBulkTicketController)

module.exports = router