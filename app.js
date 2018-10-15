b()
// console.log(a); 
var a;

// var a = 'hello world';

function b() {
    console.log('function B')
}

console.log(this);

if (a === undefined) {
    console.log('undefined');
} else {
    console.log('defined');
}