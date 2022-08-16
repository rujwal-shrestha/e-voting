const db = require('../db');

const validate = async (req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const citizenship_id = req.body.citizenship_id
    let sql = `SELECT IF(  EXISTS(SELECT * FROM citizen  WHERE first_name  = (?) AND last_name = (?) AND citizenship_id = (?) ),'true','false' )AS checked`
    await db.query(sql, [first_name, last_name, citizenship_id], (error, result, field) => {
        if(error){
            console.log(error.message);
        }else{
            res.send(result)
        }
    })
}

module.exports = {
    validate
};