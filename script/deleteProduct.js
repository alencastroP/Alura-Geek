import { connectApi } from "./connectApi.js";

async function deleteProduct(productId) {
    try {
        await connectApi.deleteProduct(productId);
        alert("Product successfully deleted!");
    } catch (error) {
        console.error("Error deleting product", error);
    }

    window.location.reload(true);
}

export { deleteProduct };
