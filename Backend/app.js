const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connetToDb = require('./DB/db');
connetToDb();

const app = express();
const cors = require('cors');
const userRoutes = require('./routes/user.route')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res) =>{
    res.send("hello world")
})

app.use('/users', userRoutes);

module.exports = app;