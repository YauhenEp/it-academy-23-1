const fse = require('fs-extra')

async function workWithFolders() {
    await fse.ensureDir('./DirOne');
    await fse.ensureDir('./DirTwo');
    await fse.createFile('./DirOne/test.txt');
    await fse.move('./DirOne/test.txt', './DirTwo/test.txt');
    await fse.ensureDir('./DirThree');
    await fse.copy('./DirTwo/test.txt', './DirThree/test.txt');
    await fse.remove('./DirOne');
    await fse.remove('./DirTwo');
    await fse.remove('./DirThree');
}

workWithFolders()