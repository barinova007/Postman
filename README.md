         
# Postman Practice Repo

### Homeworks List
№ | discription
:---:| ---
01 | Workspace, Collection, Request, GET, POST, URL, Body-from-data
02 | First tests

### JS Cheatsheet
##### False
__0, '', null, undefined, Nan__

##### Types
- number: 3, 3.5, Infinity(-Infinity), NaN, BigInt (90071992547409910n)
- string symbols: \n - return, \\ - backslash, \t - tab
- null: nothing, empty, unknown. var have a type
- undefined: var have no type at all
- object: {can: 'contain', many: [of], every: {types}}
- symbol: ?
- array: [[[1d, 1d],[2d, 2d]],[[3d, 3d],[null, null]]]

##### Unary operators
let a = 5;
- +'5' - converts to number
- -a - negativate variable
- ++a - prefix increment = 6, a = 6 
- a-- - postfix decrement = 5, a = 4
- 1 + '1' = '11'
- 1 + 1 + '1' = '21'
- '10' - * / ** 2 = number
- 0 == '0' - true - str turns to num
- 0 === '0' - false - str != num
- !a - not a

##### Conditional examples
```sh
// ternary operator - ?:
// condition ? result1 : result2
// condition if (result1 === true) else (result2 === false)
let a = 1 + 1 + (5 > 6 ? 1 : 2);
4
a = a === 1 ? a : (a === 2 ? 100 : 200);
```
200
```sh
let a = 13000;
if (a >= 500000) {
    a = a - 500000;
} else if (a >= 100000) {
    a = a - 100000;
} else if (a >= 12000) {
[v] a = a - 12000;
} else {
    a = a - 50;
}
```
a = 1000
```sh
let centimeters = 20;
switch (centimeters) {
    case 5:  //case centimeters === 5
        console.log('small');
        break;
    case 10:  //case centimeters === 10
    case 13:  //case centimeters === 13
    case 15:  //case centimeters === 15
        console.log('medium');
        break;
[v] case 20:  //case centimeters === 20
    case 25:  //case centimeters === 25
        console.log('huge');
        break;
    default:
        console.log('unknown');
        break;
}
```
'huge'
```sh
let value = 20;
switch (true) {
    case value < 5:  // true === (value < 5)
        console.log('<5');
        break
    case value <= 15:  // true === (value <= 15)
        console.log('<=15');
        break
[v] case value === 20:  // true === (value === 20)
        console.log('=20');
        break
    default:
        console.log('und');
        break;
}
```
'=20'
##### Loop examples
```sh
voriaMoney = 0;
names = ['oleg', 'misa', 'bogdan'];
money = [10000, 2000, 5000];
for(let counter = 0; counter < names.length; counter += 1) {
     console.log(names[counter] + ' give away ' + money[counter]);
     voriaMoney += money[counter];
     money[counter] = 0;
}
```
oleg give away 10000

misa give away 2000

bogdan give away 5000

taras give away 700

voriaMoney = 17700

```sh
voriaStuff = [];
names = ['oleg', 'misa'];
stuff = [['phone', 'laptop'], ['vine', 'chocolate', 'glass']];
		// loop will iterrate stuff for included []
for (let count_stuff = 0; count_stuff < names.length; count_stuff += 1) {
		// than put this [] in items
    const items = stuff[count_stuff];
		// loop will iterrate items for included ''
    for (let count_items = 0; count_items < items.length; count_items += 1) {
		// console takes name by count_stuff and item by count_items
        console.log(names[count_stuff] + ' give away ' + items[count_items]);
		// voriaStuff filled with items
        voriaStuff.push(items[count_items]);
    }
    stuff[count_stuff] = []
}
```
oleg give away phone

oleg give away laptop

misa give away vine

misa give away chocolate

misa give away glass

voriaStuff (5) ['phone', 'laptop', 'vine', 'chocolate', 'glass']

stuff (2) [Array(0), Array(0)]
```sh
do {

    console.log('print first');

} while (sum < 5) {

    sum += 1;

    counter += 1;

}

console.log('end in ' + counter + ' iterat');
```
print first

end in 6 iterat
