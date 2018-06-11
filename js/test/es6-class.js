class Person {

    constructor() {
        this.id = "Id_2"
    }

    set name(name) {
        this._name = name.charAt(0).toUpperCase() + name.slice(1);
    }

    get name() {
        return this._name;
    }

    sayHello() {
        console.log('Hello, my name is ' + this._name + ', I have ID: ' + this.id);
    }
}

var b = new Person();
b.name = "alice"
b.sayHello();