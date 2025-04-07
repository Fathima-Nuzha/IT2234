const express=require('express')
const router=express.Router()
const studentServices=require('./studentservice')

router.get('/',(req,res)=>{
    const results=studentServices.getStudents()
    if(results){
        res.status(200).json(results)
    }else{
        res.status(404).send("sorry.no data found!")
    }
})

router.get('/course/:cou',(req,res)=>{
    const cou=req.params.cou
    const results=studentServices.getByCourse(cou)
    if(results){
        res.status(200).json(results)
    }else{
        res.status(404).send("sorry.no data found!")
    }
})

router.get('/:id',(req,res)=>{
    const id=req.params.id
    const results=studentServices.getStudent(id)
    if(results){
        res.status(200).json(results)
    }else{
        res.status(404).send("sorry.no data found!")
    }
})



module.exports=router

