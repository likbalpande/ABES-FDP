function handleName(e) {
    const val = e.target.value;
    const parent = document.getElementById("card-name");
    parent.innerText = `Name: ${val}`;
}

function handleCode(e) {
    const val = e.target.value;
    const parent = document.getElementById("card-code");
    parent.innerText = `Emp. Code: ${val}`;
}

function handleFile(e) {
    console.log(e);
    const file = e.target.files[0];
    const val = URL.createObjectURL(file);
    const parent = document.getElementById("card-img");
    parent.setAttribute("src", val);
}
