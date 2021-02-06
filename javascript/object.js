

/**
 * set key with variable [ES6]
 */
let b = "aa";
let a = {
    [b] : "1"
}

/**
 * set key with variable [ES6]
 */
let b = "aa";
let a = {};
a[b] = "1";


alert(JSON.stringify(a) )

/**
 copy object or assign object
 */

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
