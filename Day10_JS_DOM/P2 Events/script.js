function handleNameKeyUp(e) {
    const value = e.target.value;
    console.log("key UP:", value);
}

function handleNameKeyDown(e) {
    const value = e.target.value;
    console.log("key DOWN:", value);
    const parent = document.getElementById("id-card-name");
    // parent.innerText = "Name: " + value;
    parent.innerText = `Name: ${value}`;
}

function handleNameChange(e) {
    const value = e.target.value;
    console.log("change:", value);
}
