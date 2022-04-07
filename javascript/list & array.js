const numbers = [1, 2, 3, 4, 5];
const doubled = numbers
const doubled = numbers.flatMap(number => [number, number]);
const doubled = numbers.filter(number => number);
const doubled = numbers.filter(number => {return number});

//merge arrays
const twoNumbers = numbers.concat(numbers)

//sub listing
numbers.slice(0, 2) // [1, 2]
numbers.slice(2) // [3, 4, 5]

const nextUsers = [ ...users ]; // users 배열을 복사하고
const distinctNumber = [...new Set(numbers)]
console.log(doubled);

var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
fruits.forEach(a => alert(a));

function myFunction(item, index) {
    document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}

/**
 *
 * @param arr
 * @param key lambda
 * @param value lambda
 */
function toMap(arr, key, value) {
    return arr.reduce(function(map, obj) {
        map[key(obj)] = value(obj);
        return map;
    }, {});
}

var arr = [
    { key: 'foo', val: 'bar' },
    { key: 'hello', val: 'world' }
];

print(toMap(arr, a => a.key, a => a.val))

var groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
        (rv[key(x)] = rv[key(x)] || []).push(x);
        return rv;
    }, {});
};

console.log(groupBy(['one', 'two', 'three'], a => a.length));

//sum, avg
const sum = numbers.reduce((a, b) => a + b, 0);
const avg = (sum / times.length) || 0;

//sort
numbers.sort(function(a, b) {
    return a - b;
});
numbers.sort();
console.log(numbers);

//NodeList to Array

Array.from(document.querySelectorAll("div.b8cIId.ReQCgd.Q9MA7b > a"))
