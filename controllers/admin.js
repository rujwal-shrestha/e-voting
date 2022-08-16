const db = require('../db');

const addMember = async (req, res)=> {
    const {member_name} = req.body;
    let sql = `INSERT INTO member (member_name) VALUES(?)`;
    await db.query(sql, [member_name], (err, result, feild) => {
        if(err){
            console.log(err)
        }
        else{
            res.json(result);
        }
    })

};

const viewCount = async (req, res) => {
    let sql = `SELECT * FROM member`
    await db.query(sql, (err, result, feild)=>{
        if(err){
            console.log(err.message)
        }else{
            res.json(result)
        }
    });
};

module.exports = {
    addMember,
    viewCount
};