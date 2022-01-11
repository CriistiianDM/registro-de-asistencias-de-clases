//librerias
const { Router } = require('express');
const {  getTask  , postTask, putTask, deleteTask } = require('../funcionalidades/funcionalidades');

//iniciar router
const router = Router();


//method get
router.get('/register/:id',  getTask);

//method post
router.post('/', postTask);

//method put
router.put('/',  putTask);

//method delete
router.delete('/', deleteTask);


//exportar el router
module.exports = router;
