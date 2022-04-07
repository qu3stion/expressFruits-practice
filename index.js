const express = require('express')
const app = express()
const fruits = require('./fruit')
require('dotenv').config()
const PORT = process.env.port || 4000

//routes
app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/greet/:name', (req, res) => {
    res.send(`Hello! ${req.params.name}`);
});

app.get('/five', (req, res) => {
    res.send([1, 2, 3, 4, 5,]);
});

app.get('/evens/:n', (req, res) => {
    let n = (req.params.n)
    let evensArray = []
    for (let i = 2; i <= n; i++) {
        i % 2 == 0 ? evensArray.push(i) : null
    }
    res.send(evensArray);
});

app.get('/namelength/:name', (req, res) => {
    let length = req.params.name.length;
    res.send(`${length}`);
});
app.get('/fruits', (req, res) => {
    res.send(fruits);
})

app.listen(PORT, () => console.log(`runnning on port ${PORT}`))