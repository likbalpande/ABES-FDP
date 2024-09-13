function displayElement(id, displayType) {
    const elem = document.getElementById(id);
    elem.style.display = displayType;
}

function proceedToStep2() {
    displayElement("step1-btn", "none");
    displayElement("step2", "block");
}

function proceedToStep3() {
    let N = document.getElementById("number-of-bulbs").value;
    function createBulbParent(parent) {
        const bulbParent = document.createElement("div");
        bulbParent.setAttribute("class", "bulb-parent");
        const bulbImage = createBulb(bulbParent);
        createOffButton(bulbParent, bulbImage);
        parent.appendChild(bulbParent);
    }
    function createBulb(parent) {
        let img = document.createElement("img");
        img.setAttribute("src", "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png");
        img.setAttribute("class", "bulb-off");
        parent.appendChild(img);
        return img;
    }
    function createOffButton(parent, img) {
        let offButton = document.createElement("div");
        offButton.setAttribute("class", "switch btn-off-parent");

        let offButtonChild = document.createElement("div");
        offButtonChild.setAttribute("class", "switch-ball btn-off-child");
        offButton.appendChild(offButtonChild);

        parent.appendChild(offButton);

        let state = false;
        offButton.addEventListener("click", () => {
            state = !state;
            if (state) {
                img.setAttribute("src", "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png");
                offButton.setAttribute("class", "switch btn-on-parent");
                offButtonChild.setAttribute("class", "switch-ball btn-on-child");
            } else {
                img.setAttribute("src", "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png");
                offButton.setAttribute("class", "switch btn-off-parent");
                offButtonChild.setAttribute("class", "switch-ball btn-off-child");
            }
        });
    }
    displayElement("step2", "none");
    displayElement("step3", "flex");
    const step3Parent = document.getElementById("step3");
    for (let i = 0; i < N; i++) {
        createBulbParent(step3Parent);
    }
    displayElement("reset-btn", "block");
}

function reset() {
    displayElement("step1-btn", "block");
    displayElement("step2", "none");
    document.getElementById("step3").innerHTML = "";
    displayElement("step3", "none");
    displayElement("reset-btn", "none");
}
