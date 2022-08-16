const db = require('../db');
// const express = require('express');
// const app = express();
// app.use(express.json());
const vote = async (req, res) => {
    const member_name = req.body.member_name;
    let sql = `UPDATE member SET vote = vote + 1 WHERE member_name = (?)`
    await db.query(sql, [id], (err, result, fields) => {
        if(err){
            console.log(err.message)
        }else{
            res.json(result)
        }
    });
}

module.exports = {
    vote
};