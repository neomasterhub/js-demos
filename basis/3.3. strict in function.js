function f1() {
    x = 123;
    console.log(x);
}

function f2() {
    'use strict';
    x *= 2;
    console.log(x);
}

function f3() {
    'use strict';
    y = 123;
    console.log(y);
}

f1();
f2();
f3();

// node "3.3. strict in function.js"
// 123
// 246
// 3.3. strict in function.js:14
//    y = 123;
//      ^
// ReferenceError: y is not defined
//    at f3