//find the maximum value in an array using foreach loop
let A=[1,2,3,4,5,2]
let maximum=0;
A.forEach((n) =>{
	
	if(n>maximum){
		maximum=n
	}
	//(maximum<n)&&(max=n)     short form to handle if using ternery 
	
});
console.log(maximum)