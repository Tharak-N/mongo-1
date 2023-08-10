const http = require('http')
const app = require('./app')
const server = http.createServer(app)

const port = 3600;
server.listen(port, () => {
    console.log(`server listening on http://localhost:${port}`)
})