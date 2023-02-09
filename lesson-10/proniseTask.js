// Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после
// которой промис должен зарезолвится (то есть выполнится успешно).

// let data = new Promise((res, rej) => {
//     setTimeout(() => {
//         res('Success')
//     }, 3000)
// })
//     .then(data => {
//         console.log(data);
//     })
// console.log(data);

async function newFunc() {

}

//Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, после которой промис
// должен зареджектится (то есть выполнится с ошибкой).

// let data = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej('Error')
//     }, 3000)
// })
//     .catch((err) => {
//         console.log(err)
//     })
// console.log(data);
// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. Сделайте так, чтобы
// сгенерированное число было задержкой функции setTimeout в секундах. Оберните все это в промис.
// Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6
// до 10.
function returnRandomNumber(min, max) {
    let result = Math.floor(Math.random() * (max -  min + 1) + min);
    console.log(result)
    return result;
}

// new Promise((res, rej) => {
//     const randomNumber = returnRandomNumber(1, 10);
//     setTimeout(() => {
//         if(randomNumber >= 1 && randomNumber < 5) {
//             res('Success ---- ' + randomNumber)
//         } else {
//             rej('Error --- ' + randomNumber)
//         }
//     }, randomNumber * 100)
// })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// Сделайте промис, который через 5 секунд случайным образом выполнится или с успехом,
// или с ошибкой. Примените изученный метод catch для отлавливания ошибок.
// new Promise((res, rej) => {
//     const randomNumber = returnRandomNumber(1, 2);
//     setTimeout(() => {
//         if(randomNumber === 1) {
//             res('Success ---- ' + randomNumber)
//         } else {
//             rej('Error --- ' + randomNumber)
//         }
//     }, randomNumber * 100)
// })
//     .then((data) => {
//     console.log(data)
// })
//     .catch(err => {
//         console.log(err)
//     })

// Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. Сделайте так,
// чтобы каждый последующий промис через 3 секунды возводил в квадрат результат предыдущего
// промиса. После окончания манипуляций выведите число консоль лог на экран.

async function returnNumberAfterTimeout(number, timeout = 3000) {
    setTimeout(async () => {
        console.log(number * number)
        return number * number;
    }, timeout)
}

// new Promise((res, rej) => {
//     let num = returnRandomNumber(2, 9);
//     console.log('1 --- ', num )
//     res(num);
// })
//     .then(async (number) => {
//         let a = await returnNumberAfterTimeout(number);
//         console.log('2 - ', a)
//         return a;
//     })
//     .then((numberOne) => {
//         return returnNumberAfterTimeout(numberOne);
//     })
//     .then((numberTwo) => {
//         console.log('Result ---', numberTwo)
//     })
// Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой
// от 1 до 5 секунд. Пусть каждый промис своим результатом возвращает эту задержку. С помощью
// Promise.all получите массив результатов, найдите его сумму, выведите на экран.

const promOne = returnResult()
const promTwo = returnResult()
const promThree = returnResult()

function returnResult() {
    return new Promise((res) => {
        const timeout = returnRandomNumber(1, 5);
        setTimeout(() => {
            res(timeout)
        }, timeout * 1000);
    })
}

Promise.all([promOne, promTwo, promThree])
    .then((data) => {
        const res = data.reduce((prev, cur) => prev + cur, 0)
        console.log(data, res)
    })