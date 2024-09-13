function arrobj(arr) {
    let obj = {};
    arr.forEach((v) => {
        let key = v[0];
        let value = v[1];
        obj[key] = value;
    });
    return obj;
}

console.log(
    arrobj([
        ["ram", 1],
        ["sita", 2],
        ["gita", 3],
    ])
);
