// Function to sum numbers using the rest parameter
const mysum1 = (...n) => {
    let t = 0;
    n.forEach((i) => t = t + i);
    console.log(t);
};
mysum1(4, 5, 6, 89, 2);
