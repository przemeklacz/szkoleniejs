function asyncFn() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('hurra');

        }, 1000);
    });
    return promise;
};