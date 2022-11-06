//  A capitalize function that takes a string and returns it with the first character capitalized.

export function capitalize(input) {
return input.toUpperCase()
}

//A reverseString function that takes a string and returns it reversed
export function reverse(input) {
let newString = ''
    for(let i = input.length - 1; i >=0; i--) {
       newString+=input[i]
    }
    return newString
}

//A calculator object that contains functions for the basic operations:
// add,
// subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
//

export const calculator = {
    add(a, b) {return a + b},
    divide(a, b) {return a / b},
    multiply(a, b) {return a * b}
}

//A caesarCipher function that takes a string and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.
//Don’t forget to test wrapping from z to a
//Don’t forget to test keeping the same if.
//Don’t forget to test punctuation!
//For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this if you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.


export function caesarCipher(input) {
    let newString = ''

    for (const i in input) {
        const CharCode = input.charCodeAt(i)
        const extranum = getNumberCount(CharCode)
        const divider = getDivider(extranum)
        let beforeDivide = ((input.charCodeAt(i)) - extranum)
        let integ =beforeDivide + 1
        if(integ > divider) {
            integ = integ % divider
            integ--
            }
        integ = integ + extranum

        let char =String.fromCharCode(integ)
        newString += char
    }
        return newString;
    }


// caesarCipher('abd')
function getDivider(num) {
    if(num ===0) {
        return 47
    }
    if((num ===65) |(num === 97)) {
        return 25
    }
    return 6
    }
function getNumberCount(char) {
    if (char < 65){
    return 0;}
    if (char < 91){
    return 65;}
    if (char < 97){
    return 91;
    }
    if(char<123) {
        return 97}
    }


//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

//const object = analyzeArray([1,8,3,4,2,6]);

//object == {
//  average: 4,
//  min: 1,
//  max: 8,
//  length: 6
//  };
export function analizeArray(array) {
    const obj = {}
    obj.average = calcAVG(array)
    obj.min = getMin(array)
    obj.max = getMax(array)
    obj.len = array.length
    return obj

}

function getMax(array) {
    let max = array[0]
    array.forEach(el => {if(el>max) {max =el}})
    return max
}

function getMin(array) {
    let min = array[0]
    array.forEach(el => {if(el<min) {min = el}})
    return min
}
function calcAVG(array) {
    const sum = array.reduce((prev, curr) => prev + curr)
    return Math.floor(sum / array.length)
}


