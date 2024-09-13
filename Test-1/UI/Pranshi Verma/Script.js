document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
});

document.getElementById("doneBtn").addEventListener("click", () => {
    const numBulbs = parseInt(document.getElementById("numBulbs").value);
    if (isNaN(numBulbs) || numBulbs <= 0) {
        alert("Please enter a valid number of bulbs.");
        return;
    }

    document.getElementById("modal").style.display = "none";
    document.getElementById("bulbsContainer").classList.remove("hidden");
    const bulbsDiv = document.getElementById("bulbs");
    bulbsDiv.innerHTML = "";

    for (let i = 0; i < numBulbs; i++) {
        const bulb = document.createElement("div");
        bulb.className = "bulb";
        bulb.innerHTML = `
            <img src="https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png" alt="Bulb Off">
            <button class="off">Off</button>
        `;
        bulbsDiv.appendChild(bulb);

        const button = bulb.querySelector("button");
        button.addEventListener("click", () => {
            if (button.classList.contains("off")) {
                button.classList.remove("off");
                button.classList.add("on");
                button.textContent = "On";
                bulb.querySelector("img").src =
                    "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
            } else {
                button.classList.remove("on");
                button.classList.add("off");
                button.textContent = "Off";
                bulb.querySelector("img").src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png";
            }
        });
    }
});

document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("bulbsContainer").classList.add("hidden");
    document.getElementById("modal").style.display = "none";
    document.getElementById("main").style.display = "block";
});
