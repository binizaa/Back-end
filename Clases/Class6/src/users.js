import express from 'express'

const app = express()

const users = [
    { id: 1, name: 'Biniza', lastName: 'Ruiz', age: 19 },
    { id: 2, name: 'Ana', lastName: 'Lopez', age: 22 },
    { id: 3, name: 'Carlos', lastName: 'Martinez', age: 25 },
    { id: 4, name: 'Lucia', lastName: 'Gomez', age: 30 },
    { id: 5, name: 'Pedro', lastName: 'Garcia', age: 18 },
    { id: 6, name: 'Marta', lastName: 'Fernandez', age: 27 }
];

app.get('/', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id === id)

    if(!user) return res.send('Dont find the user')
    
    res.send(user)
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
})

