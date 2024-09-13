const opendiv = document.getElementById("parent");

function modal() {
    const bt = document.getElementById("btn");
    bt.remove();
    const div2 = document.createElement("div");
    div2.setAttribute("class", "inner-div");
    opendiv.appendChild(div2);
    const p = document.createElement("p");
    p.setAttribute("class", "newp");
    p.innerHTML = "custom lighing";
    div2.appendChild(p);
    const input = document.createElement("input");

    input.setAttribute("type", "text");
    input.setAttribute("class", "number1");
    div2.appendChild(input).style.backgroundColor = "yellow";
    const done = document.createElement("button");
    done.innerText = "DONE";
    done.setAttribute("class", "done");
    done.setAttribute("click", "imageshow");
    div2.appendChild(done);

    function imageshow() {
        document.getElementById("");
    }
}
