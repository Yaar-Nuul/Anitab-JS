 //normal function

 function add (num1, num2){
    const sum = num1 + num2;

    console.log({console: sum});
    return {return: sum}
    
}
console.log(add(2, 3));
add(4,5);

//function expression

const subtract = function(num1, num2){
    console.log(num1 -num2);
}
subtract(20, 10)

//arrow functions

const multiply = (num1, num2) => console.log(num1 * num2);
multiply(5, 6);

//IIFEs Functions(call it immediately)

(function(){
    console.log("Hello");
    re
})
();