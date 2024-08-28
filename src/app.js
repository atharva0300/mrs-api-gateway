const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const app = express();


// middlewares 
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser()) // middleware for cookies

// routes 
app.use('/api/auth/' , require('./routes/auth-route'))
app.use('/api/movie/' , require('./routes/movie-route'))
app.use('/api/search' , require('./routes/search-route'))
app.use('/api/slots/' , require('./routes/showtime-route'))
app.use('/api/booking/' , require('./routes/booking-route'))
app.use('/api/comment/' , require('./routes/comment-route'))
app.use('/api/offer/' , require('./routes/offer-route'))
app.use('/api/theater' , require('./routes/theater-route'))
app.use('/api/user/' , require('./routes/user-route'))


// error handling middleware
app.use((err , req , res, next) => {
    console.error(err.stack)
    res.status(500).send({message : err.message})
})

module.exports = app;