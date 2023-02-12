const express = require('express');
const app = express();

const db = require('./models');

//routers
const postRouter = require('./routes/Posts')
app.use('/posts', postRouter);

app.listen(3001);

app.get('/', (req, res) => {
    res.send('hello world')
})