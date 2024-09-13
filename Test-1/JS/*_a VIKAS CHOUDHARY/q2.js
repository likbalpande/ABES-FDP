function totalPriceOfGoodProducsts() {
    console.log("inside");
    let data = fetch("https://dummyjson.com/products");
    data.then((res) => {
        res.json().then((res) => {
            console.log(res);

            for (let i = 0; i < res.length; i++) {
                document.getElementById("div1").innerHTML = res.products[i];
                var sum = 0;
                if (product[i].rating >= 4.0) {
                    sum = sum + product[i];
                    return sum;
                }
            }
        });
    });
}
