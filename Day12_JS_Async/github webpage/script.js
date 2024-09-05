const getData = () => {
    const val = document.getElementById("s-t").value;
    fetch(`https://api.github.com/users/${val}`).then((res) => {
        res.json().then((data) => {
            display(data);
        });
    });
};

function display(data) {
    const parent = document.getElementById("parent");
    console.log(data);

    const title = document.createElement("h4");
    title.innerHTML = `
        ${data.login} 
        <span style="color: brown">(${data.bio})</span>
    `;
    title.setAttribute("class", "card-title");
    parent.appendChild(title);

    const image = document.createElement("img");
    image.setAttribute("src", data.avatar_url);
    image.setAttribute("class", "card-img");
    parent.appendChild(image);
}
