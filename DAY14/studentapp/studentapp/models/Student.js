const mongoose = require('mongoose')
const studentSchema= new mongoose.Schema({
    _id:{type:String,require:true},
    name:{type:String,require:true},
    date_of_birth:{type:Date},
    gender:{type:String},
    degreeId:{
        type:String,
        require:true,
        ref:'degrees'
    },
    enroled_courses:[{type:mongoose.Types.ObjectId,ref:'courses'}]
})

const Student = mongoose.model('students',studentSchema)
const kolins = new Student({
    _id:'2020IT01',
    name:'Peter Kolins',
    date_of_birth:'01-05-1995',
    gender:'male',
    degreeId:'FAS2000ICT',
    enroled_courses:['6835c09f265763bde166727a','6835e04c70515e2b460508fe']
})
kolins.save()
module.exports=Student