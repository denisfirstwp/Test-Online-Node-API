const express = require('express');

const app = express();


app.get('/', (req,res)=>{
  res.json({
    msg:'OK'
  })
})

app.listen(8877);