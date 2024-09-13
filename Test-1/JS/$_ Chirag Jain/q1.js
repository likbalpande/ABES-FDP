function makeobj(...arrays) {
    let obj = {};

    arrays.forEach((array) => {
        obj[array[0]] = array[1];
    });

    return obj;
}

// Example usage
const RES = makeobj(["name", "lik"], ["city", "delhi"], ["cpi", 9.0]);

for (const key in RES) {
    console.log(`${key}: ${RES[key]}`);
}
