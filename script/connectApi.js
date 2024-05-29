async function listProducts() {
    const connection = await fetch("http://localhost:3000/products");
    const convertedConnection = await connection.json(); 

    return convertedConnection;
}

async function createProduct(name, price, image, id) {
    const connection = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            price: price,
            image: image,
            id: id
        })
    });

    if (!connection.ok) { 
        throw new Error("Could not register the product!");
    }

    const convertedConnection = await connection.json();
    return convertedConnection;
}

async function deleteProduct(productId) {
    try {
        const connection = await fetch(`http://localhost:3000/products/${productId}`, {
            method: "DELETE",
        });
        const data = await connection.json();
        console.log(data); 
    } catch (error) { 
        console.error("Error deleting product:", error);
        throw error;
    }  
}

async function searchProduct(searchTerm) {
    const connection = await fetch(`http://localhost:3000/products?q=${searchTerm}`);
    const convertedConnection = await connection.json();
    return convertedConnection;
}

export const connectApi = {
    listProducts,
    createProduct, 
    searchProduct,
    deleteProduct
}
