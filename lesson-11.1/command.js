class Driver {
	constructor(command) {
		this.command = command;
	}

	execute() {
		this.command.execute();
	}
};

class Engine {
	constructor() {
		this.state = false;
	}

	on() {
		this.state = true;
	}

	off() {
		this.state = false;
	}
};

class OnStartCommand {
	constructor(engine) {
		this.engine = engine;
	}

	execute() {
		this.engine.on();
	}
};

class onSwitchOffCommand {
	constructor(engine) {
		this.engine = engine;
	}

	execute() {
		this.engine.off();
	}
};

const engine = new Engine();

console.log(engine);

const startEngine = new OnStartCommand(engine);
let driver = new Driver(startEngine);
driver.execute();

console.log(engine);

const switchOffEngine = new onSwitchOffCommand(engine);
driver = new Driver(switchOffEngine);
driver.execute();

console.log(engine);

