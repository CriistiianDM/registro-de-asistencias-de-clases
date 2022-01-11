const pool = require('../db');


//get the express module
const getTask = async (req, res) => {
    try {
    const { id } = req.params;
    const result = await pool.query("SELECT cuenta_id FROM cuentas WHERE cuenta_id = $1 ",[id]);
    console.log(result.rowCount,'hola');
    res.json(result.rows);
    } catch (error) {
        console.log(error);
    }
}


//post the express module
const postTask = (req, res) => {
    res.send('post task');
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
    deleteTask
}