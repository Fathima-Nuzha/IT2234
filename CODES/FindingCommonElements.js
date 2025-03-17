/* a=[4,5,6,3,7]
b=[8,3,2,1,5]
find the common elements between a and b*/

	
let a = [4, 5, 6, 3, 7];
let b = [8, 3, 2, 1, 5];

let common = [];

for (let i = 0; i < a.length; i++) {
    if (b.includes(a[i])) {
        common.push(a[i]);
    }
}

console.log(common);
console.log("");