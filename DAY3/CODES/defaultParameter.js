// Arrow function with default parameter
const mult = (a, b = 2) => {
    return a * b;
};
console.log(mult(4, 5)); // Using both parameters
console.log(mult(4));    // Using default value for b
