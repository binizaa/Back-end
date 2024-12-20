import express from 'express'

const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/queries', (req, res) => {
    const queries = req.query
    res.send(queries)
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
})
