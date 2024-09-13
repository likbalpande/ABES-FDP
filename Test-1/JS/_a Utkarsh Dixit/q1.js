function makeObj(R) {
    let result = {};
    for (let i = 0; i < R.length; i++) {
        let key = R[i][0];
        let value = R[i][1];
        result[key] = value;
    }
    return result;
}
const R = makeObj([
    ["name", "AYUSHI"],
    ["city", "Ghaziabad"],
    ["CPI", "8.5"],
]);
console.log(RES);
