const getProducts = async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const objects = await resp.json();
    //   console.log(typeof products);

    const products = objects.products;
    let totalPrice = 0;
    products.forEach((product) => {
        if (product.rating >= 4.0) totalPrice += product.price;
    });
    console.log(totalPrice);

    //   return totalPrice;
};

getProducts();
