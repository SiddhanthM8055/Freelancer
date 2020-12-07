const express = require('express');
const connectDB = require('./connect_db');
const bodyParser = require('body-parser');
const app = express();
//connect database
connectDB();

//Initialise Middleware
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE');
    next();
})

app.get('/',(req,res) => res.send('API Running'));

app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/posts',require('./routes/api/posts'));
app.listen(8080,() => console.log("Server started on port 8080"));