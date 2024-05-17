let fruits = ['Mango', 'Banana', 'Orange']

let arr = new Array(20, 30);

console.log({fruits});
console.log({arr});
console.log('fruits', fruits[1]);
console.log(fruits[1]);

//replace
fruits[2] = 'Kiwi'
console.log({fruits});

console.log(fruits.length);
console.log('last item', fruits[fruits.length - 1]);
console.log(fruits.slice(-1));
//or
let sliceFruits = fruits.slice(-1);
console.log({sliceFruits});

//how to add items to an array

let addEnd = fruits.push('Pawpaw');
console.log({fruits});

let addStart = fruits.unshift('Pineapple');
console.log({fruits});


//remove items 

let removeEnd = fruits.pop();
console.log({fruits});

let removeStart = fruits.shift();
console.log({fruits});

//loops (accumulators, current numbers)
//addition (reduce method)
let items = [20, 30, 40, 50,60]

let add = items.reduce((acc, curr)=> acc + curr);
console.log({add});

//multiplication (map method)

let multiply = items.map(item => item * 2);
console.log({multiply});

// let times = items.map(a => a *2);
// console.log({times});

//find square (forEach method)

let square = [];
items.forEach(item => {
    const multiply= item * item;
    console.log({multiply});
    square.push(multiply)
})
console.log({square});


//duplication
let b = ["Mama", "Papa", "Dada", "Kaka", "Twins", "Twins"];
console.log({b});
let cloneB = b.slice();
console.log({cloneB});

let arrSub = [1, 2, 3, 4, 5]
let mapped = arrSub.map(arrS => arrS - 5);
console.log({arrSub});
console.log({mapped});