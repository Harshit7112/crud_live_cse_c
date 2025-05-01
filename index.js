const express=require('express');
const app=express();
const port=8000;
app.use(express.json())
const database=[{id:1,name:"harshit",age:20},
    {
        id:2,name:"ritam",age:49
    }
]

//create
app.post('/users',(req,res)=>{
    const newuser={
        id:database.length+1,
        name:req.body.name,
        age:req.body.age
    }
    database.push(newuser)
    res.status(201).json(newuser);
})

//read
app.get('/users',(req,res)=>{
    res.json(database);
})
app.listen(port,()=>{console.log(`app runs at ${port}`)})