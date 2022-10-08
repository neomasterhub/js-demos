// #1. let vs var.
{
    let l1 = l2 = 1;
    var v1 = v2 = 2;

    console.log('inside:');
    console.log('l1: ' + l1);
    console.log('l2: ' + l2);
}

window.v2 = 20;
window.v3 = 200;

console.log('outside:');
console.log('v1: ' + v1);
console.log('v2: ' + v2);
console.log('v3: ' + v3);
console.log('window.v1: ' + window.v1);
console.log('window.v2: ' + window.v2);
console.log('window.v3: ' + window.v3);

console.log('l1: ' + l1); // error
console.log('l2: ' + l2); // error

// #2. var in function.
function f() {
    var x = 123;
}
console.log(x); // error