function makeObj(RES) {
    let r = {};
    for (let i = 0; i < RES.length; i++) {
        let key = RES[i][0];
        let value = RES[i][1];
        r[key] = value;
    }
    return r;
}
const RES = makeObj([
    ["name", "Lik"],
    ["city", "Delhi"],
    ["CPI", "9.0"],
]);
console.log(RES);
