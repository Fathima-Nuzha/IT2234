let A=[1,2,3,4,5,2]
console.log(A)//To directly print the array

console.log("")

for(let i=0;i<A.length;i++){//get the element by element and print 
	console.log(A[i]);
}
console.log("")
//using for each loop
A.forEach((n) =>{
	console.log(n)
})