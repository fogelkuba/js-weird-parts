// b()
// // console.log(a); 
// var a;

// // var a = 'hello world';

// function b() {
//     console.log('function B')
// }

// console.log(this);

// if (a === undefined) {
//     console.log('undefined');
// } else {
//     console.log('defined');
// }


function b () {
    var myVar;
    console.log(myVar);
}

function a () {
    var myVar = 2;
    console.log(myVar);
    b(); 
    console.log(myVar);
}

var myVar = 1;
console.log(myVar);

a();
console.log(myVar);