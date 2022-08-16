const { hash } = require('bcrypt');
const db = require('../db');
const bcrypt = require('bcrypt');
const salrounds = 10;

const addUser = async (req, res) => {
    const citizenship_id = req.body.citizenship_id;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const password = req.body.password;

    bcrypt.hash(password, salrounds, (err, hash) => {

        let sql = `INSERT INTO user (citizenship_id, first_name,last_name, password) VALUES(?, ?, ?, ?)`;
        db.query(sql, [citizenship_id,first_name, last_name, hash], (error, result, field) => {
            if(error){
                console.log(error.message)
            }else(
                res.json(result)
            )
        }); 
    })
}

module.exports = {
    addUser
};