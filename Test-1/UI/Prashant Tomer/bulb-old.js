let parent = document.getElementById("box");
let button = document.createElement("button");

button.setAttribute("value", "Start");
button.setAttribute("type", "button");
button.setAttribute("class", "btn");
button.textContent = "Start";
parent.appendChild(button);

button.onclick = displayquantity;

function displayquantity() {
    console.log("inside quantity");
    parent.removeChild(button);
    let textfield = document.createElement("input");
    textfield.setAttribute("type", "text");
    textfield.setAttribute("placeholder", "Input Quantity");
    textfield.setAttribute("class", "textfield");
    textfield.setAttribute("id", "count");
    let button1 = document.createElement("button");

    button1.setAttribute("value", "Start");
    button1.setAttribute("type", "button");
    button1.setAttribute("class", "btn");
    button1.textContent = "Submit";

    parent.appendChild(textfield);
    parent.appendChild(button1);

    let count = document.getElementById("count").value;

    console.log("Hello" + count);
    button1.onclick = displaybulb(4);
    //displaybulb(count);
}

function displaybulb(count) {
    console.log("Hi" + count);
}
