const http = require('http')
const app = require('./src/app')

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT , (req , res) => {
    console.log('Server is listening on PORT : ' , PORT)
})
