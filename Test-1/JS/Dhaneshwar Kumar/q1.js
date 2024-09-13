const makeObj = (temp) => {
    obj = {};
    for (t of temp) {
        obj[t[0]] = t[1];
    }
    return obj;
};

arrTest = [
    ["name", "Lik"],
    ["city", "Delhi"],
    ["cpi", 9.0],
];
console.log(makeObj(arrTest));
