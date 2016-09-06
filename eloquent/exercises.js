//chapter 2 exercise 1//

for (var line = "#"; line.length < 8; line += "#")
  console.log(line);

// chapter 2 exercise 2//

  for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 === 0)
    output += "Fizz";
  if (n % 5 === 0)
    output += "Buzz";
  console.log(output || n);
}

//chapter 2 exercise 3

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);


function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


var car1={
    color: "red",
    type: "car",
    make: {
        tires: 4,
        doors: 2,
        year: 1998
    }
}
var car2={
    color: "blue",
    type: "truck",
    make: {
        tires: 4,
        doors: 4,
        year: 2001
    }
}

function deepEqual(car1, car2){
    for(var key1 in car1){
        console.log(`Object1.${key1} contains ${car1[key1]}`);
        if(typeof car1[key1]=='object'){
            deepEqual(car1[key1], car2);
        }
//        console.log("Object1."+key1+" contains " + car1[key1]);
    }

    for(var key2 in car2){
        console.log(`Object2.${key2} contains ${car1[key2]}`);
    }
}

deepEqual(car1, car2);



//chapter 3 exercise 1

function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/* Chapter3 Exercise 2 */

var character = "N";
  function isEven(N){
	if (N===0){
 		return true;
}
else if (N==1){
 		return false;
}
else{
		return isEven(N-2);
}
	}
	console.log(isEven(50));
console.log(isEven(75));
	console.log(isEven(1));
if (character == character.toUpperCase()) {
            alert ('upper case true');
 }

 /* Chapter3 Exercise3 */

function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

//chapter 4 exercise 1

function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

console.log(range(1, 10))
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

//chapter 4 exercise 2

function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

//chapter 4 exercise 3

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

//chapter 4 exercise 4

function deepEqual(a, b) {
  if (a === b) return true;

  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;

  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
