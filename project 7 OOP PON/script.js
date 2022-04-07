'use strict';

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);

jonh.sayHello();

/* const jonh = {
    health: 100
}; */

/* john.__proto__ = soldier; */

/* Object.setPrototypeOf(jonh, soldier); */
/* 
console.log(john.armor); */