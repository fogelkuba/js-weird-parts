var person = {
    firstName: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstName + ' ' + this.lastname;
    }
}

var john = {
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


_.extend(john, jane);
console.log(john);
