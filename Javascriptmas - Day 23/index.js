import products from "./data.js";
/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/
//function
function sortProducts(data){
    data.sort((a, b) => {
    return a.price - b.price
    })
    return data
}
//const calling function
const listByCheapest = sortProducts(products)
//iterate over results & log them
for (let gift of listByCheapest) {
    console.log(`${gift.product},${gift.price}`)
}