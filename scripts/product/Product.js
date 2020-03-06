/*
    Creates an HTML representation of a product
*/

export const productRepresentation = (product) => {
    return `
        <div class="product">
            <h3>${product.name}</h3>
            <p>Bean Type: ${product.beanType}</p>
            <p>Roast Type: ${product.roastType}</p>
            <p>Price: $${product.price}</p>
        </div>
    `
}