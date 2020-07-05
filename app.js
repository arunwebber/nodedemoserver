const express = require('express');
const port = 3000;
const app = express();

app.get('/',(req,res)=>{
    console.log(' Hello World ');
    return res.json({
        message:"Hello world"
    })
});

app.get('/',(req,res)=>{
    console.log(' Hello World ');
    return res.json({
        message:"Hello world"
    })
});


app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});
