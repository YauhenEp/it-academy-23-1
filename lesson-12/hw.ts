interface ObjectManipulatorInterface {
    set(key: any, value: string): object,
    get(key: any): string | number | boolean | undefined | null | symbol | object,
    delete(key: string): object,
    getObject(): object
}

export class ObjectManipulator implements ObjectManipulatorInterface{

    constructor(protected obj: object) {}

    public set(key: string, value: string): object {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string): string | number | boolean | undefined | null | symbol | object | any {
        return this.obj[key];
    }

    public delete(key: string): object {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): object {
        return this.obj;
    }
}

interface User {
    [key: string]: number | string | boolean,
}
export class ObjectManipulator1 {

    constructor(protected obj: User) {}

    public set(key: string, value: number | string | boolean | null): object {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string): string | boolean | number | null {
        return this.obj[key];
    }

    public delete(key: string): object {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): object {
        return this.obj;
    }
}


/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */


export function map(mapper: (value: number, index: number, array: number[]) => number, input: number[]): number[] | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: number[]): number[] | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}