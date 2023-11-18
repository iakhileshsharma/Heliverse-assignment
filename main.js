const express = require('express');
const mongoose = require('mongoose');
const app = express();
const users = require('./routes/users');




mongoose.connect('mongodb://localhost/Users')
.then(()=> console.log('Connection is successful to Database'))
.catch(err => console.error('coudlnt connect to database', err))


app.use(express.json());
app.use('/users', users);


app.listen(3000, ()=>{
    console.log('port is running on 3000');
});