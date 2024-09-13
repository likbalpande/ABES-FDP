function makeObj(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i][0];
        let value = arr[i][1];
        obj[key] = value;
    }
    return obj;
}
const input = [
    ["name", "lik"],
    ["city", "Delhi"],
    ["CPI", "9.0"],
];
const result = makeObj(input);
console.log(result);
