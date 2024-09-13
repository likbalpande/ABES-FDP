function makeObj(RES) {
    let result = {};
    for (let i = 0; i < RES.length; i++) {
        let key = RES[i][0];
        let value = RES[i][1];
        result[key] = value;
    }
    return result;
}
const RES = makeObj([
    ["name", "Lik"],
    ["city", "Delhi"],
    ["CPI", "9.0"],
]);
console.log(RES);
