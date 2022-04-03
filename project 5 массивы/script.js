'use strict';

const arr = [1, 2, 3, 4, 15, 9];

arr.sort(trueSort);

function trueSort(a, b) {
    return (a - b);
}
    console.log(arr);

/* arr.forEach(function(item, num, arr) {
    console.log(`${item} имеет номер ${num} в массиве ${arr}`)
}); */

/* arr.pop(); 
arr.push(4);

console.log(arr); */

/* for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* for (let i of arr ) {
    console.log(i);
} */

/* const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join('; ')); */