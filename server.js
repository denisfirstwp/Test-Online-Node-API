const express = require('express');

const app = express();



app.get('/',(req,res)=>res.send('Welcome to the first API'))

app.listen(3001);