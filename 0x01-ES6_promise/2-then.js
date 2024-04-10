export default function handleResponseFromAPI(promise) {
    return new promise((resolve, regect) => {
        if (promise) {
            resolve({
                status: 200,
                body: 'success',
            });
        }
        else {
            regect(new error());
        }
        console.log("Got a response from the API");
    });
}

const promise = Promise.resolve();
handleResponseFromAPI(promise);
