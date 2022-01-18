//librerias
const { Router } = require('express');
const {  getTask  , postTask, putTask, deleteTask , getTaskByEmail ,  getTaskVerify , getTaskData , getTaskSubjects , getTaskTeachers , getTaskSeguros_medicos , getTaskSedes , postTaskTeacher} = require('../funcionalidades/funcionalidades');

//iniciar router
const router = Router();


//method get
router.get('/register/:id',  getTask);

//metod get 
router.get('/register/email/:email', getTaskByEmail);

//metod get 
router.get('/login/:email/:password', getTaskVerify);

//metod get 
router.get('/admin/:email', getTaskData);

//method get
router.get('/course', getTaskSubjects);

//method get
router.get('/teachers', getTaskTeachers);

//method get
router.get('/seguros_medicos', getTaskSeguros_medicos);

//method get
router.get('/sedes', getTaskSedes);

//method post
router.post('/register', postTask);

//method post
router.post('/teacher/admin', postTaskTeacher);

//method put
router.put('/',  putTask);

//method delete
router.delete('/', deleteTask);

router.get('*', (req, res) => {
    res.send('404 not found') }
);

//exportar el router
module.exports = router;
