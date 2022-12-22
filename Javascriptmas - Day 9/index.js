/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word){
    return word[0].toUpperCase() + word.substring(1)
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    const splitStr = str.split(' ')
    let toTileSentence = ''
    for (let word of splitStr) {
        toTileSentence = toTileSentence + capitalizeWord(word) + ' '
    }
    return toTileSentence
}

// Test your functions
console.log(capitalizeWord("pumpkin"))
console.log(toTitleCase("pumpkin pranced purposefully across the pond"))




//DRYer?
console.log(cleanTitleCase("writing dryer code is fun"))
/* CLEANED UP VERSION */
function cleanTitleCase(str) {
    return str.split(' ').map(capitalizeWord).join(' ')
}