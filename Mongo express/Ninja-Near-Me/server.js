
const express = require('express');
const routes =require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

const app = express();
 
//connect to mongo db
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise =global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/api',routes);

//Error Handling

app.use(function(err,req,res,next){

    /* console.log(err); */
    res.status(422).send({error: err.message});
});

const port= process.env.port || 4000;

app.listen(port,function(){
    console.log(`Listening on PORT ${port}`)
});