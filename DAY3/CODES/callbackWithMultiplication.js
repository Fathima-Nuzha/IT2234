// Function to multiply a number by 2
const multtwo = (n) => n * 2;

// Function that applies a callback function on multiple numbers
const myarr = (mul, ...n) => {
    n.forEach((i) => console.log(mul(i)));
    console.log();
};
myarr(multtwo, 4, 5, 6, 7, 2);
