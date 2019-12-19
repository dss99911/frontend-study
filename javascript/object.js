

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