// Деструктивное присваивание
let a = [1, 'str', 'dfs', true, 'fd', false];

// let [first, second, third, ...forth] = a;
// console.log(first, second, third, forth);

let obj = {
    name: 'name',
    age: 30,
    isDevelop: true,
    isMarried: true,
    numberOfChildren: 2
}

// let {name: n, age, isDevelop, surname = 'Yau', ...rest} = obj;
// console.log(n, age, isDevelop, surname, rest);

// Генераторы

function *generate() {
    try{
        console.log('First');
        yield 1;
        console.log('Second');
        yield 'str';
        console.log('Third');
    } catch (err) {
        console.log(`New Error ${err}`)
    }

}

// let gen = generate();
// console.log(generate());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

function *generateNumbers(start, end) {
    let current = start;
    while(current <= end) {
        yield current++;
    }
}

// for(let number of generateNumbers(1, 5)) {
//     console.log(number);
// }

let obj1 = {
    *generateNumbers(start, end) {
        let current = start;
        while(current <= end) {
            yield current++;
        }
    }
}

// for(let number of obj1.generateNumbers(1, 7)) {
//     console.log(number);
// }

// console.log(obj1);