const num = document.getElementById("n1").nodeValue;
console.log(num);

const sw1 = document.getElementById("im1").addEventListener("click", change3());
const sw2 = document.getElementById("im2").addEventListener("click", change3());

function change3() {
    var image = document.getElementById("im1");
    if (image.src.match("offbulb,png")) {
        image.src = "onbulb.png";
    } else {
        image.src = "offbulb.png";
    }
}
