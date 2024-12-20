import express from 'express'

const app = express()

app.get('/user/:name', (req, res) => {
    res.send(`Welcome ${req.params.name}`)
})

app.get('/completedName/:name/:lastName', (req, res) => {
    res.send(`Welcome ${req.params.name} ${req.params.lastName}`)
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
})