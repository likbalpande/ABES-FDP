function totalPriceOfGoodProducsts() {
    console.log("inside");
    let data = fetch("https://dummyjson.com/products");
    data.then((res) => {
        res.json().then((res) => {
            // console.log(res);
            let sum = 0;
            for (let i = 0; i < res.length; i++) {
                // document.getElementById("div1").innerHTML = res.products[i];
                if (products[i].rating >= 4.0) {
                    sum = sum + products[i].rating;
                }
            }
            // document.getElementById("sum").innerHTML = sum;
            console.log(sum);
        });
    });
}
totalPriceOfGoodProducsts();

//    HTML
//    <!DOCTYPE html>
//    <html lang="en">
//    <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <title>Document</title>
//    </head>
//    <body>
//        <h2>Hello World</h2>
//        <button id="btn" onclick="totalPriceOfGoodProducsts()">Submit</button>
//        <div id="div1"></div>
//        <div id="sum"></div>

//        <script src="./test2.js"></script>
//    </body>
//    </html>
