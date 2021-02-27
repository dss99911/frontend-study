const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);

const nextUsers = [ ...users ]; // users 배열을 복사하고
const distinctNumber = [...new Set(numbers)]
console.log(doubled);

var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
    document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}