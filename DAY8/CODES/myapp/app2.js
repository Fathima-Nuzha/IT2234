const express=require('express');
const app=express();
const port=3001;

const students=require('./DB/studentdb')

//list of  student JSON details



app.get('/',(req,res)=>{
    res.send('hello express js');
});

app.get('/msg',(req,res)=>{
    res.send('hello it student');
});

app.get('/stu',(req,res)=>{
    res.send(students);
});

app.get('/stu/:id',(req,res)=>{
    const id=req.params.id
   // console.log(id)
    const result=students.find(student=>student.regno==id);
    res.send(result);
});

app.get('/stu/course/:cou',(req,res)=>{
    const cou=req.params.cou
   // console.log(id)
    const result=students.filter(student=>student.course==cou);
    res.send(result);
});

app.get('/stu/age/:ag',(req,res)=>{
    const ag=req.params.ag
   /// console.log(id)
    const result=students.find(student=>student.age==ag);
    res.send(result);

    if(result){
        res.send(result)
    }else{
        res.status(404).send("student not found")
    }
});

//check student  is available or not if not return an error message




app.listen(port,()=>{
    console.log(`Running on ${port}`);
});