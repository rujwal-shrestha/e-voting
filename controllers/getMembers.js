const db = require('../db');

const getMembers = async (req, res) => {
    let sql = `SELECT * FROM member`;
    await db.query(sql, (error, result, field) => {
        if(error){
            console.log(error)
        }
        else{
            res.send(result)
        }
    })
}

module.exports = {
    getMembers
}