const http = require('http')

const server = http.createServer((req, res) => {
    res.end('My first hello word!!')
})

server.listen(8080, () => {
    console.log('Listening on port 8080')
})