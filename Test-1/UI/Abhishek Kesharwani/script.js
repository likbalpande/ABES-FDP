function addFn() {
    const divEle = document.getElementById("inputFields");
    const wrapper = document.createElement("div");
    const iFeild = document.createElement("input");
    iFeild.setAttribute("type", "text");
    iFeild.setAttribute("placeholder", "Enter value");
    iFeild.setAttribute("onchange", "show()");
    iFeild.setAttribute("id", "txtval");
    iFeild.classList.add("input-field");
    wrapper.appendChild(iFeild);
    divEle.appendChild(wrapper);
}

function show() {
    let val = document.getElementById("txtval").value;

    let imge = document.getElementById("image");
    let imge1 = document.getElementById("image1");
    let imge2 = document.getElementById("image2");
    let imge3 = document.getElementById("image3");
    let imgof = document.getElementById("image-off");
    let contentimage = document.getElementById("image-content");
    imge.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
    imge1.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
    imge2.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
    imge3.src = "https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png";
    imgof.src = "https://pics.clipartpng.com/Light_Bulb_PNG_Clip_Art-2102.png";
    for (let i = 0; i < val; i++) {
        contentimage.appendChild(imge + i);
        contentimage.appendChild(imgof);
    }
}
