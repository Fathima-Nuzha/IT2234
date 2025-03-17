/*arr=[1,2,3,4,5,6,]
target=7
write a code to find the all pairs that sumup to the target
*/

let arr=[1,2,3,4,5,6]
let target=7;
let pairs=[];

for(let i=0;i<arr.length;i++){
	for(let j=i+1;j<arr.length;j++){
		if(arr[i]+arr[j]===target){
			pairs.push([arr[i],arr[j]])
		}
	}
}
console.log(pairs)