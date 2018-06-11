function Person() {
    this.id = "Id_1";
}

Person.prototype.setName = function(name) {
    this.name = name.charAt(0).toUpperCase() + name.slice(1);
}

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name + ", I hava ID: " + this.id);
}

var g = new Person();
g.setName("alice")

g.sayHello()