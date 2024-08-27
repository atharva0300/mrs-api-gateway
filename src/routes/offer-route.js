const express = require('express')
const { getOfferDiscountController } = require('../controllers/offer-controller')

// middlewares
const verifyJWT = require('../middlewares/verifyJWT')
const verifyUserOrAdmin = require('../middlewares/verifyUserOrAdmin')
const rbac = require("../middlewares/rbac")

const router = express.Router()


router.get('/:offerCode' , verifyJWT , rbac.checkPermission("get_offer") , getOfferDiscountController)

module.exports = router