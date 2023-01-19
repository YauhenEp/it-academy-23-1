console.log(global);

function sayHi() {
    return 10 + 30;
}

console.log(sayHi())

const fs = require('fs-extra');

fs.mkdirp('NewDir')
