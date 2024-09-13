function totalPriceOfGoodProducsts() {
    console.log("inside");
    let data = fetch("https://dummyjson.com/products");
    data.then((res) => {
        res.json().then((res) => {
            console.log(res);

            for (let i = 0; i < res.length; i++) {
                document.getElementById("div1").innerHTML = res.products[i];
            }
        });
    });
}
