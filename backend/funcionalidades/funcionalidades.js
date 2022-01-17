const pool = require('../db');


//get the express module
const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT cuenta_id FROM cuentas WHERE cuenta_id = $1 ", [id]);
        console.log(result.rowCount, 'hola');
        res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
}


const getTaskByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        console.log(email);
        const result = await pool.query(`SELECT email FROM cuentas WHERE email = '${email}'`);
        console.log(result.rowCount, 'hola');
        res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
}

//get email and password
const getTaskVerify = async (req, res) => {
    try {
        const { email, password } = req.params;
        const result = await pool.query(`SELECT email FROM cuentas WHERE email = '${email}' AND contrasena = '${password}'`);
        res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
}


const getTaskData = async (req, res) => {
    try {
        const { email } = req.params;
        const result = await pool.query(`SELECT p_nombre, p_apellido  FROM personas as table1 , cuentas as table2 WHERE table2.email = '${email}'`);
        res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
}

const getTaskSubjects = async (req, res) => {
    try {
        const result = await pool.query(`SELECT nombre_materia , materia_id FROM materias`);
        console.log(result.rowCount, 'hola');
        res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
}

const getTaskTeachers = async (req, res) => {
    try {
        const result = await pool.query(`SELECT p_nombre as nombre, p_apellido as apellido , profesores.identificacion  FROM  personas, profesores`);
        console.log(result.rowCount, 'hola');
        res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
}


//post the express module
const postTask = async (req, res) => {
    const {
        p_nombre,
        s_nombre,
        p_apellido,
        s_apellido,
        correo,
        contrasena,
        tipo_persona,
        dirrecion,
        cuenta_id } = req.body;
    try {
        await pool.query("INSERT INTO cuentas(cuenta_id,email,contrasena) VALUES ($1,$2,$3)", [cuenta_id, correo, contrasena]);
        await pool.query("INSERT INTO personas (identificacion, p_nombre, s_nombre, p_apellido, s_apellido, dirrecion, tipo_persona) VALUES ($1,$2,$3,$4,$5,$6,$7)", [cuenta_id, p_nombre, s_nombre, p_apellido, s_apellido, dirrecion, tipo_persona]);
    } catch (error) {
        console.log(error);


    }

}


//put the express module
const putTask = (req, res) => {
    res.send('put task');
}


//delete the express module
const deleteTask = (req, res) => {
    res.send('delete task');
}

module.exports = {
    getTask,
    postTask,
    putTask,
    deleteTask,
    getTaskByEmail,
    getTaskVerify,
    getTaskData,
    getTaskSubjects,
    getTaskTeachers
}