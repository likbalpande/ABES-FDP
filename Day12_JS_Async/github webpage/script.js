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

// implement the function "makeObj" which take the input as 2D array
// and returns the object from it

// example:
//         const RES = makeObj([
//                              ['name', 'Lik'],['city', 'Delhi'],['CPI': 9.0]
//                            ])
// here the RES object will look like this:
// {
//     name: 'Lik',
//     city: 'Delhi',
//     CPI: 9.0
// }

// --------------------------------------------------------------

// implement the function "totalPriceOfGoodProducts"
// it calls the API --> https://dummyjson.com/products
// get the json from the response
// get the products from the json
// calculate the sum of prices of products with rating >= 4.0
// return the sum
