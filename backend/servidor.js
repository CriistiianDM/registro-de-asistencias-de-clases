//import express from 'express';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const taskRouter = require('./routes/routes');


//crear el servidor
const app = express();

//settings
app.set('port', 4500);


//middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(taskRouter);



//escucha del servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});