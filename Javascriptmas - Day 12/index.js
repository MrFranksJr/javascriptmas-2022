/* Challenge 2: Breakfast Menu
- Topic: .map()
Our restaurant menu currently only shows the breakfast menu, 
as it has been hard coded into the HTML file. However, we want 
to offer a dinner menu instead. Let's fix this using .map()

1. First, fetch a reference to the menu <section> from the DOM. 
2. Set the innerHTML content of the menu <section> to...
3. the dinnerFoods array by mapping over the array and returning 
the following div for each food in the array: 
`<div class="food">FOOD VALUE HERE</div>` 
4. Remember to remove any separating commas between the food divs!
*/

//consts
const domSection = document.getElementById('menu')
const dinnerFoods = ['🍝','🍔','🌮']
const updateBtn = document.getElementById('updateBtn')
//eventlisteners
updateBtn.addEventListener('click', () => { updateMenu(dinnerFoods) })
//functions
function updateMenu(dinner) {
    let htmlString = ''
    const htmlArray = dinner.map(food => `<div class="food">${food}</div>`)
    for (let div of htmlArray) {
        htmlString += div
    }
    domSection.innerHTML = htmlString
}