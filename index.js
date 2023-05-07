const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cors())
app.use(express.json())

const users = [
    { id: 1, name: 'Saimon', email: 'saimon@gmail.com' },
    { id: 2, name: 'Salman', email: 'salman@gmail.com' },
    { id: 3, name: 'Sahin', email: 'sahin@gmail.com' }
]


app.get('/', (req, res) => {
    res.send('User Management server is running')
})

app.get('/user', (req, res) => {
    res.send(users)
})

app.post('/user', (req, res) => {
    console.log('Post Api button hittins');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`);
})