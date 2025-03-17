// Define 10 student JSON objects
//JSON
//{key:value}

let students = [
  { name: "John", gender: "Male", course: "IT", gpa: 3.5 },
  { name: "Alice", gender: "Female", course: "Math", gpa: 3.8 },
  { name: "Sara", gender: "Female", course: "IT", gpa: 3.9 },
  { name: "Michael", gender: "Male", course: "Science", gpa: 3.2 },
  { name: "Emma", gender: "Female", course: "IT", gpa: 4.0 },
  { name: "James", gender: "Male", course: "History", gpa: 2.8 },
  { name: "Sophia", gender: "Female", course: "Literature", gpa: 3.6 },
  { name: "David", gender: "Male", course: "IT", gpa: 3.3 },
  { name: "Olivia", gender: "Female", course: "Engineering", gpa: 3.7 },
  { name: "Daniel", gender: "Male", course: "IT", gpa: 3.1 }
];

// Find female students
let femaleStudents = students.filter(student => student.gender === "Female");
console.log("Female Students:", femaleStudents);

// Find students following IT course
let itStudents = students.filter(student => student.course === "IT");
console.log("IT Students:", itStudents);

// Find the max and average GPA
let gpas = students.map(student => student.gpa);
let maxGPA = Math.max(...gpas);
let averageGPA = gpas.reduce((sum, gpa) => sum + gpa, 0) / gpas.length;

console.log("Max GPA:", maxGPA);
console.log("Average GPA:", averageGPA.toFixed(2));
