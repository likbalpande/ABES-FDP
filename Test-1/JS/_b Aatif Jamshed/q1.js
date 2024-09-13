function makeObj(input) {
    const aj = {};
    for (let i = 0; i < input.length; i++) {
        const [key, value] = input[i];
        aj[key] = value;
    }
    return aj;
}
const final_array = [
    ["name", "Lik"],
    ["city", "DELHI"],
    ["CPI", "9.0"],
];
const result = makeObj(final_array);
console.log(result);
