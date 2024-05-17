// Function to multiply the first four items by itself and add 10 to the last two items
function manipulateArray(arr) {
    arr[0] *= arr[0];
    arr[1] *= arr[1];
    arr[2] *= arr[2];
    arr[3] *= arr[3];
    
    arr[arr.length - 2] += 10;
    arr[arr.length - 1] += 10;

    return arr;
}

let numbers = [1, 2, 3, 4, 5, 6];
console.log(manipulateArray(numbers));

// Function using a while loop to break when the item is equal to the fourth index
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
while (i < arrNum.length) {
    if (i === 4) {
        break;
    }
    console.log(arrNum[i]);
    i++;
}

// Function that skips the second index in an array of strings
function skipSecondIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i === 2) {
            continue;
        }
        console.log(arr[i]);
    }
}

let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
skipSecondIndex(fruits);

// Function to log each element of an array using a for loop
function logElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

logElements(fruits);

// Function to reverse a string using a while loop
function reverseString(str) {
    let reversedStr = '';
    let i = str.length - 1;
    
    while (i >= 0) {
        reversedStr += str[i];
        i--;
    }

    return reversedStr;
}

console.log(reverseString('hello'));

// another method

function capital_letter(str) 
{
    str = str.split(" ");

    for (let i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));