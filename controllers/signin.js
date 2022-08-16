const express = require('express');
const app = express();
const { hash } = require('bcrypt');
const db = require('../db');
const bcrypt = require('bcrypt');
const salrounds = 10;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser)
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({
    key: "userId",
    secret: "votings",
    resave: false,
    saveUninitialized:false,
    cookie: {
        secure: true
    }
}))



const signIn = async (req, res) => {
    const citizenship_id = req.body.citizenship_id;
    const password = req.body.password;
    let sql = `SELECT * FROM user WHERE citizenship_id = ?`;
    await db.query(sql, [citizenship_id], (error, result, field) => {
            if(error){
                console.log(error.message)
            }
            if(result.length>0){
                bcrypt.compare(password, result[0].password, (error,response)=> {
                    if(response){
                        req.session.userid = result;
                        res.json(req.session.user)
                        res.send({message: 1})
                    }else{
                        res.send({message: 0})
                    }
                })
            }else{
                res.send({message: 2})
            }
    }); 
    
}

module.exports = {
    signIn
};