let num = 10;
const str = 'string';
var bool = true;

// str = '15';

num = 'string';
num = true;
num = null;

// bool = 4;

// console.log(newVar);
// var newVar = 25;

// console.log(newLet);
// let newLet = 15;

let newLet = 15;
// console.log(newLet);
//
newLet = 'Hello!';
// console.log(newLet);
//
let variable;
let variable1 = undefined;
// console.log(variable);
//
let varNull = null;
// console.log(varNull);

let obj = {};

// console.log(typeof newLet);
// console.log(typeof variable);
// console.log(typeof bool);
// console.log(typeof varNull);
// console.log(typeof obj);
// console.log(variable === variable1);

let stri = new String('str');
console.log(stri + ' Hello')

let number = new Number(10);

// console.log(number + 5);
//
// console.log(str.length);
// console.log(str.split(''));
//
// console.log({} instanceof Object);
// console.log([] instanceof Array);
// console.log([] instanceof Object);

let n = 10000000000000000000000000545458374889843543534534534534n;
// console.log(typeof n);
//
// console.log(0.3 === (0.1 + 0.2));
// console.log(0.1 + 0.2);
//
// console.log(parseInt('23'))
// console.log(parseInt('23@@'))
// console.log(parseInt('23@@', 16))
// console.log(parseInt('23@@', 8))
// console.log(parseInt('23@@', 2))
// console.log(023);
// console.log(0x23);

console.log(0.3 === +(0.1 + 0.2).toFixed(2));
console.log(0.3 === Number((0.1 + 0.2).toFixed(2)));

let n1 = 10000000000000000000000000545458374889843543534534534534;
// console.log(Number.isSafeInteger(n1))
//
let n2 = 1000000000;
// console.log(Number.isSafeInteger(n2))

// console.log(Math.cbrt(27))
//
// console.log(Math.round(Math.random() * (100 - 1) + 1));
//
// console.log('Hello World');
// console.log("Hello World");
// console.log(`Hello World`);
//
// console.log('Hello world ' + n2 + ' equals ' + newLet + ' ' + str + '!!!');
// console.log(`Hello world ${n2} equals ${newLet} ${str}!!!`);

const a = 'Hello world!';
// console.log(a[4])
// console.log(a.charAt(4))
//
// console.log(a.indexOf('orl'))
// console.log(a.indexOf('orlss'))
// console.log(a.indexOf('o'))
// console.log(a.lastIndexOf('o'))
// console.log(a.replace('world', 'hell'));
// console.log(a.slice(0, 5) + a.slice(7, 8));
// console.log(a.substr(0, 5));
// console.log(a.substring(0, 4));

let b = 'New string →'
// console.log(b.toUpperCase())
// console.log(b.toLowerCase())

let c = false;
let d = 'false';

const obj1 = {
    name: 'Yauhen',
    surname: 'Bialetski',
    move: () => {
        return 'I am running!';
    }
}

obj1.age = 99;

// console.log(obj1)
// console.log(obj1.move())

obj1.age = 18
// console.log(obj1)

delete obj1.surname

console.log(obj1)

obj1['marriage status'] = true
console.log(obj1);

obj1[b] = '\'string\' new str'
console.log(obj1);

const f = {}
const h = f;
const g = {}
console.log(f === g)
console.log(f === h)