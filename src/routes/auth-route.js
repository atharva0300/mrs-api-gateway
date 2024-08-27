const express = require('express')
const router = express.Router()

// controllers 
const {authRegisterController, authLoginController, authRefreshTokenController, updatePasswordController, logoutController} = require('../controllers/auth-controller')

// ratelimiter
const {authLimiter , updatePasswordLimiter , loginLimiter} = require('../config/rateLimiter/authLimitConfig')

router.post('/register' , authLimiter , authRegisterController)
router.post('/login' , loginLimiter , authLoginController)
router.get('/refresh-token' , authRefreshTokenController)
router.patch('/update-password' , updatePasswordLimiter , updatePasswordController)
router.get('/logout',  logoutController)

module.exports = router