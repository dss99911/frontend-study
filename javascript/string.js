
let text = "https://m.shopclues.com/lifestyle-sale-11.html?bsid%5b%5d=139&bsid%5b%5d=44419&bsid%5b%5d=175&bsid%5b%5d=504&bsid%5b%5d=186&bsid%5b%5d=419"
let number = text.indexOf("?");
text.substring(0, number)
text.includes(".com")

let rawString = `sdafasdf
asdfasd""\`
${text}
asdf`

text.split(",")

JSON.stringify({a:1})
JSON.parse("{'a':1}")

//Regex
let text = "Visit W3Schools";
let pattern = /w3schools/i;
let result = text.match(pattern);