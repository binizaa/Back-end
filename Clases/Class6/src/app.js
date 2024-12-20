import express from 'express'

const app = express()

app.get('/saludo', (req, res) => {
    res.send("Hello from express :D")
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
})

