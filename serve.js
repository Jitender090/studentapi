// const express= require('express');

// const app= express();
// // app.use(express.json());
// app.get('',(req,res)=>{
//     res.send("Server is running on 4000 port");
// })
// app.post('/login',(req,res)=>{
//     console.log(req.body);
// }))
// app.listen(3000);

const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());

const database = require('./config/database.js');
database();

app.get('',(req,res)=>{
    res.send("Server is running on 8000 port");
})

const routes = require('./routes/studentroutes.js');
app.use('/',routes);


app.listen(8000); 