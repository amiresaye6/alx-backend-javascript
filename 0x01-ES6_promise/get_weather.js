export default function getWeather() {
    return new Promise((resolve, reject) => {
        fetch("https://samples.openweathermap.org/data/2.5/weather?q=Al%20Sharqia,EG&appid=b1b15e88fa797225412429c1c50c122a1")
        .then(Response => Response.json())
        .then(data => resolve(data))
    })
}

function displayData(weather) {
    console.log(weather);
}
function onError(err) {
    console.log(`Error: >>> ${err}`);
}

getWeather()
    .then(displayData)
    .catch(onError)
    .finally(() => {
        console.log("all promisses are settled :_:")
    })
