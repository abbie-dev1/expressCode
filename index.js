// const app = require('express');

// const body = require('body-parser');

// app.use(body.json())

const express = require('express');
const app = express();

const body = require('body-parser');

const path = require('path');

const route = express.Router();

app.use(body.json());

app.set('port', process.env.PORT || 3000)

// app.get('/', (req, res, next) =>{
//     res.send('<h1>Hello world<h1>');
// })

route.get('/users/:id', (req, res, next) =>{
    res.send('Mi id: ${req.params.id}');
})

app.post('/', function (req, res,)
{
    const {name, id , username} = req.body;

    res.send({
        name: name, id: id, username : username
    })
})

app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})