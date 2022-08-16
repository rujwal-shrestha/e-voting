const express = require('express');
const app = express();
const routes = require('./router/routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

// app.use(cors({
//     origin: ["http://localhost:3000"],
//     methods: ["GET", "POST"],
//     credentials: true
// }));

// app.use(cookieParser)
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(session({
//     key: "userId",
//     secret: "votings",
//     resave: false,
//     saveUninitialized:false,
//     cookie:{
//         expires: 60*60*24,
//     }
// }))

app.use(express.json());


app.use('/api/v1/', routes);



app.listen(3005, ()=>{
    console.log("Server is running");
})