import { connectApi } from "./connectApi.js";

const form = document.querySelector("[data-form]");

async function createProduct(event) {
    event.preventDefault();
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;
    
    try {
        await connectApi.createProduct(name, price, image);
        alert("Product registered!");
    } catch (error) {
        console.error("Error creating product:", error);
    }

    window.location.reload(true);
}

form.addEventListener("submit", event => createProduct(event));
