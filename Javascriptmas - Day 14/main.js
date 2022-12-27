function countVowelConsonant(str) {
    let stringValue = 0
    const splitArray = str.split('')
    for (letter of splitArray) {
        if ((/[aeiou]/gi).test(letter)) {
            stringValue += 1 
        }
        else { 
            stringValue += 2 
        }
    }
    return stringValue
}




/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});