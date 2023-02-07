function getFibonachi(n) {
    return n <= 1 ? n : getFibonachi(n - 1) + getFibonachi(n - 2);
}

const obj = {
    name: 'Yauhen',
    getName: function () {
        return this.name;
    },
    setName: function (newName) {
        this.name = newName;
    }
}

// obj.name = 'Dasha';
// console.log(obj.name);
// obj.setName('New Name');
// console.log(obj.getName());
//
// let newStr = 'limitli';
//
// console.log(newStr.replace(/li$/, 'e'));
// console.log(newStr.replace(/^li/, 'e'));
// const reg = /i/;
// const regObj = RegExp("\w.\d");
// const reg1 = /limit|profit/;
// const reg2 = /[0-9]+/;
// let newStr1 = 'profit limit';
// console.log(newStr1.replace(reg1, 'e'));
// let newStr2 = '123';
// console.log(newStr2.replace(reg2, 'fff'));
//
// const reg3 = /.+/;
// newStr3 = 'Hello \nWorld';
// console.log(newStr3.replace(reg3, 'fff'));
//
// const reg4 = /l{1,3}/;
// newStr4 = 'Heddlol ddfd ll l';
// console.log(newStr4.replace(reg4, 'fff'));


let ssa = [{name: "a", width: "10", len:"12"},
    {name: "b", width: "12", len:"14"},
    {name: "c", width: "15", len:"11"}];

// [{name: "a", square: "120"},{name: "b", square: "168"},{name: "c", square: "165"}];

// const newSsa = ssa.map(obj => {
//     return {
//         name: obj.name,
//         square: +obj.width * +obj.len
//     }
// })
//
// console.log(newSsa);
//
// let newArr = [];
//
// ssa.forEach(obj => {
//     newArr.push({
//         name: obj.name,
//         square: (obj.width * obj.len).toString()
//     })
// })
// console.log(newArr);


const fse = require('fs-extra');

// fse.ensureDir('./DirOne', () => {
//     console.log('Dir one created');
//     fse.ensureDir('./DirTwo', () => {
//         console.log('Dir two created');
//         fse.createFile('./DirOne/test.txt', () => {
//             console.log('File txt created');
//             fse.move('./DirOne/test.txt', './DirTwo/test.txt', () => {
//                 console.log('File moved from dir one to dir two');
//                 fse.ensureDir('./DirThree', () => {
//                     console.log('Dir three created');
//                     fse.copy('./DirTwo/test.txt', './DirThree/test.txt', () => {
//                         console.log('File was copied from dir two to dir three');
//                         fse.remove('./DirOne');
//                         fse.remove('./DirTwo');
//                         fse.remove('./DirThree');
//                     });
//                 });
//             });
//         });
//     });
// });
const status = 400;
// let a = new Promise((res, rej) => {
//     if(status === 200) {
//         res({
//             status: 200,
//             data: {
//                 name: 'Yauhen',
//                 age: 30
//             }
//         })
//     } else {
//         rej(`status code equal ${status}`)
//     }
//     })
//     .then(data => {
//         console.log(data);
//         // throw new Error('This is my Error');
//         if(data.data.age > 18) {
//             return `You can buy a ticket`
//         } else {
//             return `You can't buy a ticket. Go away`
//         }
//     })
//     .then((str) => {
//         console.log(str)
//         if(str === `You can buy a ticket`) {
//             return 300
//         } else {
//             return 'Go away'
//         }
//     })
//     .then(num => {
//         console.log(num)
//     })
//     .catch(err => {
//         console.log(`We have new Error ${err}. What a fuck!!!`)
//     })
//     .finally(() => {
//         console.log('Goodbye')
//     })

// console.log(a);


// Promise.resolve(fse.ensureDir('./DirOne'))
//     .then(() => {
//         return fse.ensureDir('./DirTwo')
//     })
//     .then(() => {
//         return fse.createFile('./DirOne/test.txt')
//     })
//     .then(() => {
//         return fse.move('./DirOne/test.txt', './DirTwo/test.txt')
//     })
//     .then(() => {
//         return fse.ensureDir('./DirThree')
//     })
//     .then(() => {
//         return fse.copy('./DirTwo/test.txt', './DirThree/test.txt')
//     })
//     .then(() => {
//         fse.remove('./DirOne');
//         fse.remove('./DirTwo');
//         fse.remove('./DirThree');
//     })
//
// Promise.reject('This promise rejected')
//     .catch(err => {
//         console.log(`Error ${err}`)
//     });


let prRej = new Promise((res, rej) => {
    rej('Reject');
});
let prRej1 = Promise.reject('Second Reject')
let prRes = Promise.resolve('One');
let prRes2 = Promise.resolve('Two');
let prRes3 = Promise.resolve('Three');
// Promise.all([prRes, prRes2, prRes3])
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

let prRes4 = new Promise((res, rej) =>
    setTimeout(() => {
        res('One')
    }, 300)
);

let prRes5 = new Promise((res, rej) =>
    setTimeout(() => {
        res('Two')
    }, 300)
);

let prRes6 = new Promise((res, rej) =>
    setTimeout(() => {
        rej('Reject Three')
    }, 300)
);

// Promise.race([prRes4, prRes5, prRes6])
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

// Promise.allSettled([prRej, prRes, prRes2, prRes3, prRes4, prRes5, prRes6])
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     })

Promise.any([prRej1, prRes, prRes2, prRes3, prRes4, prRes5, prRes6])
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })