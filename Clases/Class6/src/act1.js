import express from 'express'

const app = express()

app.get('/welcome', (req, res) => {
    res.send('<h1 style="color:red">Welcome to site</h1>')
})

app.get('/user', (req, res) => {
    const user = {
        nombre: 'Biniza',
        lastName: 'Ruiz',
        age: 19,
        mail: 'biniza@gmail.com'
    }

    res.send({user})
})

app.listen(8081, () => {
    console.log('Listening on port 8081')
})
