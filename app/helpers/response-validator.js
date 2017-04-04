/**
 * Class: ResponseValidator
 */
const set = WeakMap.prototype.set;
const get = WeakMap.prototype.get;

const _props = new WeakMap();
const _value = new WeakMap();



class ResponseValidator {
    constructor(props) {
        if (!props) {
            throw new Error("No props supplied.");
        }
        this.get = (key) => { return get.call(key, this); };
        this.set = (key, value) => { set.call(key, this, value); };
    }

    get(key) { return get.call(key, this); }

    //Or maybe...

    sayHello() {
        console.log('Hello from Response-Validator!');
    }
}

module.exports = ResponseValidator;
