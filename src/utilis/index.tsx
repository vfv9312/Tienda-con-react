
/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of objects 
 * @returns {number} Total Price
 */


export const TotalPrice: (products:[{}]) => number = (products) => {
    
    
    let sum = 0;
    products.forEach(element =>  sum += element.price);
    
    return sum
}