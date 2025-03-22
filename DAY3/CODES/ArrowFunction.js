//arrow function

const msg=()=>{console.log("Hello JS")}
//console.log(msg)
msg()

//find sum of two numbers

const add=() =>{return console.log(5+7)}
add()

//passing parameters
const add1=(a,b) =>{return(a+b)}
add1(5,7)

//default parameter
const mult=(a,b=2)=>{return a*b}
console.log(mult(4,5))
console.log(mult(4))

//rest parameter
const mysum=(...n)=>{
	console.log()
}
mysum(4,5,6,89,2)

//rest parameter modify this function to add the numbers on mysum
const mysum1=(...n)=>{
	let t=0
	n.forEach((i)=>t=t+i)
	console.log(t)
}
mysum1(4,5,6,89,2)

//using reduce function
const mysum2=(...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum2(4,5,6,89,2))

//callback function
const greet=(msg,fun)=>{
	console.log("hi..."+msg)
	fun()
	
}
greet("Good morning",()=>{console.log("My name is David")})

///
const multtwo=(n)=>n*2

const myarr=(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
	console.log()
}
myarr(multtwo,4,5,6,7,2)
