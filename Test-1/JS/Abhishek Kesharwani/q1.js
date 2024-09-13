const arr = [
    ["name", "lik"],
    ["city", "delhi"],
    ["cpi", "9.0"],
];
let std = new Object();
// std.constructor;
function makeobj(arr) {
    arr.forEach((ele) => {
        std[ele[0]] = ele[1];
    });
    return std;
}
obj1 = makeobj(arr);
console.log(obj1);
