const express = require('express');
const Port = process.env.Port | 4000;
const app = express();

app.use(express.json());



let users = [
    {
        id: 1, name: "ali"
    },
    {
        id: 2, name: "fatiq"
    },
];


app.get('/', (req, res) => {
    res.send("Hello World");
});

// Endpoint to retrieve all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Endpoint to create a new user
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// Endpoint to retrieve a user by ID
app.get('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id == userId);

    if (!user) {
        res.status(404).json({ error: 'User not found' });
    } else {
        res.json(user);
    }

});



app.listen(Port, () => {
    console.log(`App running on port ${Port}`);
});













// let users = {
//     1: {
//         id: '1',
//         username: 'Robin Wieruch',
//     },
//     2: {
//         id: '2',
//         username: 'Dave Davids',
//     },
// };

// let messages = {
//     1: {
//         id: '1',
//         text: 'Hello World',
//         userId: '1',
//     },
//     2: {
//         id: '2',
//         text: 'By World',
//         userId: '2',
//     },
// };


// app.get('/users', (req, res) => {
//     return res.send(Object.values(users));
// });

// app.get('/users/:userId', (req, res) => {
//     return res.send(users[req.params.userId]);
// });

// app.listen(process.env.PORT, () =>
//     console.log(`Example app listening on port ${process.env.PORT}!`),
// );