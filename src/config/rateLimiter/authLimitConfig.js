const {rateLimit} = require('express-rate-limit')

const authLimiter = rateLimit({
    windowMs: 15*60*1000, // 15 mins
    limit : 1,    // Limit each IP to 100 requests per `window` ( per windoMS duration )
    standardHeaders : true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders : false,  // Disable the `X-RateLimit-*` headers
})

const updatePasswordLimiter = rateLimit({
    windowMs: 12*60*60*1000,   // 12 hours
    limit : 1,    
    standardHeaders : true, 
    legacyHeaders : false,  
})

const loginLimiter = rateLimit({
    windowMs: 15*60*1000,   // 15 mins
    limit : 3,    
    standardHeaders : true, 
    legacyHeaders : false,  
})


module.exports = {authLimiter , updatePasswordLimiter , loginLimiter}