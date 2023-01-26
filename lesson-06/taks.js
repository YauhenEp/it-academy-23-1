let a = Symbol('asd');
let b = Symbol('asd');

// console.log(a === b);

let d = Symbol.for('sd');
let c = Symbol.for('sd');

// console.log(d === c);

let str = 'string';
let str1 = String('string');

const obj = {};
const obj1 = Object.create({});

const sym = 'a';

const arr = ['str', 10, false, {}, [], Symbol('new'), 'new string', 153];
const arr1 = ['str', 'hello', 'it', 'new'];

// console.log(arr1.join(' - '));
//
// console.log(arr1.sort());

const arrNum = [1, 10, 2, 6, 20, 100, 9, 80];

// console.log(arrNum.sort());
// console.log(arrNum.sort((a, b) => a - b));
// console.log(arrNum.sort((a, b) => b - a));

// console.log(arrNum.push(111));
// console.log(arrNum);
// console.log(arrNum.pop());
// console.log(arrNum);
//
// console.log(arrNum.unshift(123));
// console.log(arrNum);
// console.log(arrNum.shift());
// console.log(arrNum);

// console.log(arrNum.splice(4, 1))
// console.log(arrNum.splice(4, 0,'asd', 'fg'))
// console.log(arrNum)

// console.log(arrNum.slice(1, 2))
// console.log(arrNum.slice(1))
// console.log(arrNum)

// console.log(add(10, 100))

function add(num1, num2) {
    return num1 + num2;
}

// console.log(minus(100, 70));

const minus = function (num1, num2) {
    return num1 - num2;
}

// console.log(minus(100, 70));

// console.log(10%3)
// console.log(11%3)

// console.log(false == 0);
// console.log(false === 0);
//
// console.log(false != 0);
// console.log(false !== 0);

const obj2 = {name: 'Yauhen'}

// console.log('name' in obj2)
/*
console.log('surname' in obj2)
*/
const age = 10;
// if(age >= 18) {
//     console.log('Ok, you can go!')
// } else {
//     console.log('No, go away!')
// }

// if(age >= 18 && age < 65) {
//     console.log('Ok, you can go!')
// } else if(age >= 65) {
//     console.log('Greate your enter is free')
// } else {
//     console.log('No, go away!')
// }

const month = 2;

// switch (month) {
//     case 1:
//         console.log('January');
//         break;
//     case 2:
//         console.log('February');
//         break;
//     case 3:
//         console.log('March');
//         break;
//     default:
//         console.log('This is not a month')
// }

let num = 0;
// while(num <= 10) {
//     console.log(num);
//     num++;
// }

// while(num < 0) {
//     console.log(num);
//     num++;
// }
//
// do {
//     console.log(num);
//     num++;
// } while(num < 0)



// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for(let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i] + ' new sentences')
// }

// for(let value of arr1) {
//     console.log(value);
//     console.log(value + ' new sentences')
// }

const ob3 = {
    name: 'Y',
    surname: 'B',
    car: 'X',
    age: 19,
}

// for(let key in ob3) {
//     console.log(ob3[key])
// }


// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'object') {
//         console.log('Oh, this is object')
//         continue
//     }
//     console.log(`Type variable "${arr[i].toString()}" is ${typeof arr[i]}`)
// }

// try {
//     console.log(newVar);
//     let newVAr = 'new var';
// } catch (err) {
//     console.error(`New error - ${err} !!!`)
// }

// try {
//     let a = 10 / 1;
//     if(a === Infinity) {
//         throw new Error(`You can't divide by 0`)
//     }
// } catch(err) {
//     console.error(`There is a new ERROR - ${err} !!!`)
// } finally {
//     console.log(`I'll be always with you!!!`)
// }

const date = new Date();
// console.log(date);
//
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(Date.now());
// console.log('CONTINUE');




