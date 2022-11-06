import {
    reverse,
    calculator,
    capitalize,
    caesarCipher,
    analizeArray

} from "./index";
import expect from "expect";

function allASCII() {
    for (let i = 0; i < 127; i++) {
        console.log(i, String.fromCharCode(i))
    }
}

// allASCII()

//  A capitalize function that takes a string and returns it with the first character capitalized.
test('check capitalize function', () => {expect(capitalize('hello')).toBe('HELLO')})
//A reverseString function that takes a string and returns it reversed

test('test reverse string', () => {expect(reverse('hello')).toBe('olleh')})
test('another test reverse', () => {expect(reverse('Howdy')).toBe('ydwoH')})

//A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

test('testing calc', () => {expect(calculator.add(3, 5)).toBe(8 )})
test('testing calc2', () => {expect(calculator.divide(10, 5)).toBe(2 )})
test('testing calc3', () => {expect(calculator.multiply(10, 5)).toBe(50)})

test('testing caesar', () => {expect(caesarCipher('abc')).toBe('bcd')})
test('testing caesar2', () => {expect(caesarCipher('AXYZ')).toBe('BYZA')})
test('testing caesar3', () => {expect(caesarCipher('ACB')).toBe('BDC')})
test('testing caesar4', () => {expect(caesarCipher('xyz')).toBe('yza')})


const array = [1, 3, 5, 3, 2]

const resultExpected = {
    max: 5,
    min: 1,
    average: 2,
    len: 5
}
test('analyzeTest 1', () => {expect(analizeArray(array)).toStrictEqual(resultExpected)})


//A caesarCipher function that takes a string and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.
//Don’t forget to test wrapping from z to a
//Don’t forget to test keeping the same case.
//Don’t forget to test punctuation!
//For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.


//An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

//const object = analyzeArray([1,8,3,4,2,6]);

//object == {
//  average: 4,
//  min: 1,
//  max: 8,
//  length: 6
//  };

