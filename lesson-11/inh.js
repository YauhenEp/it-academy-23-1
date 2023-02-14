class Problem {
    #task = 'Very important task';
    constructor() {
        this._problem = 'Big problem';
    }

    getTask() {
        return this.#task;
    }

    setTask(newTask) {
        this.#task = newTask;
    }
}

class Task extends Problem {

}

let problem = new Problem();
let task = new Task();
console.log(problem);
console.log(task);


// console.log(problem._problem)
// problem._problem = 'Small problem';
// console.log(problem._problem)

// console.log(problem.#task);
console.log(problem.getTask());
// problem.#task = 'New task';

problem.setTask('Really dificult task');
console.log(problem.getTask());
