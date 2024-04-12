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


//weather example
function getWeather() {
    return new Promise((resolve, reject) => {
        // resolve("200");
        // regect("404");
        resolve("sunny")
    })
}

// function onSuccess(data) {
//     console.log(`today's weather is : ${data}`);
// }

// function error(data) {
//     console.log(`Error: ${data}`);
// }

// getWeather().then(onSuccess, error);

// function reterner() {
//     return Promise.resolve().then(() => {console.log("hi theref")})
// }

// reterner()


// full version
export default function getMyWeather() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Coudy");
        }, 100);
    })
}

function getMyWeatherIcon(weather) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            switch(weather){
                case "Sunny":
                    resolve("sunny icon");
                    break;
                case "Cloudy":
                    resolve("cloudy icon");
                    break;
                case "Rainy":
                    resolve("rainy icon");
                    break;
                default:
                    reject("not found");
            }
        }, 150);
    })
}

getMyWeather()
.then(getMyWeatherIcon)
// .then(onSuccess, error);
.then(onSuccess)
.catch(error);//catch is a special type of then but accepts only one paramter


// another example

function func1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("200");
        }, 100);
    })
}

function func2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("404");
        }, 100);
    })
}


function onSuccess(data) {
    console.log(data);
}

function onError(errorCode) {
    console.log(`Error: ${errorCode}`);
}

function inTheEnd() {
    console.log("finally we are done :)")
}

// in this situation, if any error returnd, it will go straight to the catch block
func1()
    .then(func2)
    .then(onSuccess)
    .catch(onError)

// in this case we catched an error after func1
    func1()
    .then(func2, onError)
    .then(onSuccess)
    .catch(onError)
    .finally(inTheEnd) //finally will be resolved after all the above it is resolved, or rejected

function handleResponseFromAPI(promise) {
    return promise
            .then({
                somethign
            })
            .catch()
}
