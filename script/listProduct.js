import { connectApi } from "./connectApi.js";
import { deleteProduct } from "./deleteProduct.js";

const productList = document.querySelector("[data-list]");

export default function buildCard(name, price, image, id) {
    const product = document.createElement("li");
    product.className = "section__items__item";
    product.innerHTML = `<div>
    <img class="section__items__image" src="${image}" alt="">
    <h3 class="section__items__title">${name}</h3>
    <div class="section__items__price__delete">
        <h2 class="section__items__price"><strong>$ ${price}</strong></h2>
        <button id="${id}" data-delete>
            <a><img src="./assets/delete.png" alt="delete button"></a>
        </button>
    </div>
</div>`

    return product;
}

async function listProducts() {
    try { 
        const apiList = await connectApi.listProducts();
        if(apiList.length > 0) {
            apiList.forEach(element => {
                productList.appendChild(buildCard(element.name, element.price, element.image, element.id));
            });
        
            const deleteButtons = document.querySelectorAll("[data-delete]");
            deleteButtons.forEach(btn => {
                btn.addEventListener("click", () => deleteProduct(btn.id));
            });
        } else {
            productList.innerHTML = `<h2 class="message__title">No products have been added!</h2>`;
        }
        
    } catch (error) {
        productList.innerHTML = `<h2 class="message__title">No products have been added!</h2>`;
        console.error("Error listing products", error);
    }
}

listProducts();
