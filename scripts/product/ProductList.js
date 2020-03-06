/*
    Shows all products on the DOM
*/

import { productRepresentation } from "./Product.js";
import { useProducts } from "./productDataProvider.js";

//get the DOM element to put the product into
const contentElement = document.querySelector('.productList')

export const productList = () => {
    //get the array of products
    const productArray = useProducts();

    for (const productObject of productArray) {
        contentElement.innerHTML += productRepresentation(productObject);
    }
}