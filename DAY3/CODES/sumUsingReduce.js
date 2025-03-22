// Function to sum numbers using the reduce function
const mysum2 = (...n) => {
    return n.reduce((t, i) => t + i);
};
console.log(mysum2(4, 5, 6, 89, 2));
