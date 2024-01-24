const fs=require("fs")

const express=require('express');
const app=express();
const port=7000;

app.get('/',(req,res)=>
{
    res.send('<h1>Welcome</h1>')
})
app.get('/courses',(req,res)=>
{
    fs.readFile('./db.json',(err,result)=>
    {
        if(err){
        throw err;
        }
        else{
            res.send(JSON.parse(result))
        }
    })
})
app.listen(port,(err)=>
{
    if (err) throw err;
    console.log("Server is starting on port " + port)
})