//librerias
const { Router } = require('express');
const {  getTask  , postTask, putTask, deleteTask , getTaskByEmail ,  getTaskVerify} = require('../funcionalidades/funcionalidades');

//iniciar router
const router = Router();


//method get
router.get('/register/:id',  getTask);

//metod get 
router.get('/register/email/:email', getTaskByEmail);

//metod get 
router.get('/login/:email/:password', getTaskVerify);

//method post
router.post('/register', postTask);

//method put
router.put('/',  putTask);

//method delete
router.delete('/', deleteTask);

router.get('*', (req, res) => {
    res.send('404 not found') }
);

//exportar el router
module.exports = router;
