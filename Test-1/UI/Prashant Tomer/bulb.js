let parent = document.getElementById("box");
let button = document.createElement("button");

button.setAttribute("value", "Start");
button.setAttribute("type", "button");
button.setAttribute("class", "btn");
button.textContent = "Start";
parent.appendChild(button);

button.onclick = displayquantity;

let textfield;
let button1;

function displayquantity() {
    console.log("inside quantity");
    if (button) {
        parent.removeChild(button);
    }
    textfield = document.createElement("input");
    textfield.setAttribute("type", "text");
    textfield.setAttribute("placeholder", "Input Quantity");
    //textfield.setAttribute("class", "textfield");
    textfield.setAttribute("id", "count");
    button1 = document.createElement("button");

    button1.setAttribute("value", "Start");
    button1.setAttribute("type", "button");
    button1.setAttribute("class", "btn");
    button1.textContent = "Show";

    parent.appendChild(textfield);
    parent.appendChild(button1);
    button1.onclick = function () {
        let count = document.getElementById("count").value;
        console.log("Hello " + count);
        displaybulb(count); // Assuming you have a function called displaybulb
    };
}

function displaybulb(count) {
    if (textfield && button1) {
        parent.removeChild(textfield);
        parent.removeChild(button1);
    }
    let bulbdiv = document.createElement("div");
    bulbdiv.setAttribute("height", "400px");
    bulbdiv.setAttribute("width", "600px");
    bulbdiv.setAttribute("border", "2px solid");

    bulbdiv.style.backgroundColor = "cyan";
    for (i = 1; i <= count; i++) {
        let img = document.createElement("img");
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("value", "checked");

        img.setAttribute("margin-top", "40px");
        img.setAttribute("margin-left", "100px");
        img.setAttribute("height", "200px");
        img.setAttribute("width", "100px");
        img.setAttribute("src", " https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png");
        bulbdiv.appendChild(img);
        bulbdiv.appendChild(checkbox);
        parent.appendChild(bulbdiv);
        checkbox.onchange = function () {
            if (checkbox.checked) {
                img.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
            } else {
                img.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png";
            }
        };

        console.log("Hi" + count);
    }
}
