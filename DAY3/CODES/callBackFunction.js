// Function using a callback
const greet = (msg, fun) => {
    console.log("hi..." + msg);
    fun();
};
greet("Good morning", () => {
    console.log("My name is David");
});
