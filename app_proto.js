var person = {
    firstName: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastname;
    }
}

var johny = {
    firstName: 'John',
    lastname: 'Doe' 
}

var jane = {
    address: 'Street',
    city: 'Waw'
}

// var john = new person(
    
// )

var a = {};
var b = function(){ };
var c = [];


// var d = [1,2,3,3,4,5,5,6,6,7,7]
// for (let index in d) {
//     console.log (index,d[index]);
// }


// for (let i in person) {
//     console.log(i, person[i]);
// }

_.extend(johny, jane);
// console.log(johny);


// function constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
};

let john = new Person('John', 21);
console.log(john);

