const students=require('./studentdb')

//function to get all students
function getStudents() {
    return students;
}

//function to get a specific student details
function getStudent(id) {
    return students.find((student)=>student.regno==id)
}

function getByCourse(cou){
    return students.filter((student)=>student.course=cou)
}

module.exports={getStudent,getStudents,getByCourse}