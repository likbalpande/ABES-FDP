function textfunc() {
    const ele = document.getElementById("btn1");
    ele.remove();
    const parent = document.getElementById("parent");
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "newDiv");
    newDiv.setAttribute("id", "newDiv");
    document.getElementById("parent").appendChild(newDiv);
    parent.appendChild(newDiv);
    const para = document.createElement("p");
    para.innerText = "Coustom Lighting";
    newDiv.appendChild(para);
    const textBx = document.createElement("input");
    textBx.setAttribute("Type", "Text");
    textBx.setAttribute("class", "textBx");
    textBx.setAttribute("id", "textBx");
    newDiv.appendChild(textBx);
}
