'use strict';
/* 
const myObj = {
    a: 5,
    b: 9
};

myObj.a = 1888;

const copy = myObj; */

/* console.log(myObj);
console.log(copy); */

function two(obj) {
    let mainObj = {};

    for (let key in obj) {
        mainObj[key] = obj[key];
    }
    return mainObj;
}

/* console.log(two(myObj)); */

const numbers = {
    a: 7,
    b: 9,
    c: 3,
    d: {
        f: 7,
        k: 8
    }
};

const newNumbers = two(numbers);

newNumbers.a = 10;

console.log(numbers);
console.log(newNumbers);

const add = {
    t: 9,
    f: 3
};

const clone = Object.assign({}, add);

clone.t = 89;

/* console.log(clone);
console.log(add); */

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'skjdvnhsjadhfj';

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'ivi', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'bloger'];
const internet = [...video, ...blogs, 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const job = [2, 6, 7];

log(...job);

const array = ['a', 'b'];
const newAarray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};