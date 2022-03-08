const express = require('express');
const app = express();


const studentRouter = require('./routes/student');

app.get('/', (req, res) => res.json({message: 'Welcome to WBL API!!!'}));

app.get('/v1', (req, res) => res.json({message: 'Welcome to WBL API Version 1!!!'}));

app.use('/v1/students', studentRouter);


app.listen(8080, () => console.log('App is started!!!'));