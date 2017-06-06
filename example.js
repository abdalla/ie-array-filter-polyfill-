'use strict';

//require('ie-array-find-polyfill');
var xpto = require('./index.js');

const people = [
    {
        name: 'Joe Due',
        age: 35
    },
    {
        name: 'Peter Belt',
        age: 30
    },
    {
        name: 'Parker Manson',
        age: 75
    },
    {
        name: 'Junior Manson',
        age: 20
    },
    {
        name: 'Mary Due Manson',
        age: 21
    },
    {
        name: 'Baby Due',
        age: 3
    },
];

const folks = people.filter(x => x.age > 1 && x.age <= 20 );

console.log('FOLKS: ', folks);