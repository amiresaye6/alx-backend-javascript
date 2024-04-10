//notes while studying :)
// promises
let logCall = function() {
    console.log("hi hter i have been called");
}
//      call back func, timeout
setTimeout(logCall, 10000) // this will run after 10 seconds

// i can pass the function without defining it, i pass it at the time i set the timeout
setTimeout(() => {
    console.log("hi")
}, 5000);
