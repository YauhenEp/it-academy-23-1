// 1. Дана строка 'js'. Сделайте из нее строку 'JS'.
let str = 'js';

// 2. Дана строка 'JS'. Сделайте из нее строку 'js'.
let str1 = 'JS';

// 3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
let str2 = 'я учу javascript!';

// 4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' 
// тремя разными способами (через substr, substring, slice).
let str3 = 'я учу javascript!';
// console.log(str3.slice(2, 5))
// console.log(str3.substr(2, 3))
// console.log(str3.substring(2, 5))
// 5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
let str4 = 'я учу javascript!';
console.log(str4.indexOf('учу'))
// 6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного 
// текста по следующему принципу: если количество символов этого текста больше заданного в 
// переменной n, то в переменную result запишем первые n символов строки str и добавим в 
// конец троеточие '...'. В противном случае в переменную result запишем содержимое 
// переменной str.
let str5 = 'я учу javascript!';

// 7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и 
// замены.
let str6 = 'Я-учу-javascript!';

// 8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой 
// строки в отдельный элемент массива.
let str7 = 'я, учу, javascript!';

// 9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой 
//  строки в отдельный элемент массива.
let str8 = 'я учу javascript!';

//  10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат 
//  '31.12.2025'.
let str9 = '2025-12-31';
// console.log(str9.split('-').reverse().join('.'))
// 11.  Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в 
// строку 'я+учу+javascript+!'.
let arr1 = ['я', 'учу', 'javascript', '!'];

// 12. Преобразуйте первую букву строки в верхний регистр.
let str10 = 'я учу javascript!';
console.log(str10[0].toUpperCase() + str10.slice(1))
// 13. Преобразуйте первую букву каждого слова строки в верхний регистр.
let str11 = 'я учу javascript!';
console.log(str11.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
}).join(' '))


// 14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен 
// работать с любыми аналогичными строками.


// const newStr12 = str12.split('_');
// const newArray = newStr12[0] + newStr12.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('');
// console.log(newArray);
