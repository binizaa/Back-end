import express from 'express';

const app = express();

/** Important for parsing form data */
app.use(express.urlencoded({ extended: true }));

const users = [
    { name: "Anna", gender: "female" },
    { name: "Mary", gender: "female" },
    { name: "Sophia", gender: "female" },
    { name: "Lucy", gender: "female" },
    { name: "Valentina", gender: "female" },
    { name: "Gabriella", gender: "female" },
    { name: "Isabella", gender: "female" },
    { name: "Camila", gender: "female" },
    { name: "Fernanda", gender: "female" },
    { name: "Martha", gender: "female" },
    { name: "Charles", gender: "male" },
    { name: "John", gender: "male" },
    { name: "Peter", gender: "male" },
    { name: "Louis", gender: "male" },
    { name: "Javier", gender: "male" },
    { name: "Fernando", gender: "male" },
    { name: "Gabriel", gender: "male" },
    { name: "Michael", gender: "male" },
    { name: "Anthony", gender: "male" },
    { name: "Diego", gender: "male" }
];

app.get('/users', (req, res) => {
    const { gender } = req.query; // Use req.query to access query parameters

    if (!gender || (gender !== 'female' && gender !== 'male')) {
        return res.send(users); 
    }

    const filteredUsers = users.filter(user => user.gender === gender);
    res.send(filteredUsers);
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
