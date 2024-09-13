async function totalPriceOfGoodProducts() {
    try {
        // Call the API
        const response = await fetch("https://dummyjson.com/products");

        // Get the JSON
        const data = await response.json();

        // Get the products
        const products = data.products;

        // Calculate the sum of prices of products with rating >= 4.0
        const sum = products.reduce((total, product) => {
            if (product.rating >= 4.0) {
                return total + product.price;
            }
            return total;
        }, 0);

        // Return the sum
        return sum;
    } catch (error) {
        console.error("Error fetching or processing data:", error);
        throw error;
    }
}

totalPriceOfGoodProducts()
    .then((total) => console.log("Total price of good products:", total))
    .catch((error) => console.error("An error occurred:", error));
