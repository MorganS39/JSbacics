// Learning variables and setting numeric values
var a;

a = 7;

var b;

b = a;

var c = 9;

// Understanding unitialized variables
var d = 5;
var e = 10;
var f = "I am a";

d = d + 1;
e = e + 5;
f = f + " String!";

// Case sensitivity training "be more sensitive"
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// addition training
var sum = 10 + 10;

// subtraction training
var difference = 45 - 33;

// multiplication training
var product = 8 * 10;
var decProduct = 2.0 * 2.5;

// division training
var quotient = 66 / 33;
var decQuotient = 4.4 / 2.0;

// incrementation of numbers
/* instead of
var myVar = 87;
myVar = myVar + 1;
simplify to */
var addVar = 87;
addVar ++;

// decrementation of numbers
// same concept except with subtration instead of addition
var subVar = 11;
subVar --;

// floating points or decimals with JS
var ourDecimal = 5.7;
var myDecimal = 8.6;

// remainder
var remainder = 11 % 3;

/* Augmented additon to simplify the script
everything is simplified by using += instead of:
var aa = 3;
aa = aa + 12; */
var aa = 3;
var bb = 17;
var cc = 12;

aa += 12;
bb += 9;
cc += 7;
// This concept applies to subtration (-=) multiplication (*=) and division (/=) as well

// String Training
var myFirstName = "Potato";
var myLastName = "Salad";

// How to add quotes to a string using \ \ backslashes
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

/* Applying multiple quotations in a string
instead of using many \ to distinguish the quotation marks like:
var testStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
instead use single quotes effectively to make:*/
var testStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// can also use escape characters to remove the need for multiple lines
var escapeStr = "firstLine\n\t\\SecondLine\nThirdLine";

// String concatenation
var concatStr = "This is the start. " + "This is the end.";

// Can also be used with the += operator
var conStr = "This is the first sentence. ";
conStr += "This is the second sentence.";

// constructing strings with variables
var myIntro = "My name is " + myFirstName + " and I am well!";

// using += operator with variables and strings
var someAdjective = "moist";
var learnStr = "Learning to code is ";
learnStr += someAdjective;

// find the length of strings using simple commands
var lastNameLength = 0;
lastNameLength = myLastName.length;

// Bracket notation. This gives the first letter of my last name. also 3rd and last letter
var firstLetterOfLastName = "";
var thirdLetterOfLastName = "";
var lastLetterOfLastName = myLastName[myLastName.length - 1];
var secondToLastLetterOfLastName = myLastName[myLastName.length - 2];
firstLetterOfLastName = myLastName[0];
thirdLetterOfLastName = myLastName[2];

// Strings are Immutable but can still be changed. example:
var sampleStr = "Jello World";
sampleStr = "Hello World";

// wordBlanks (aka Madlibs) challenge
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "Today was a beautiful " + myNoun + "." + " The sun was shining and my " + myAdjective + " wife had just " + myVerb + " " + myAdverb + ".";

// Array training
var myArray = ["muskrat", 5, "cheese"];
var myData = myArray[0];
myArray[0] = 45;

// Multi-Dimensional Arrays with indexes
var arr = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var data = arr[2][1];

// Push function manipulation (add) to add to the end
var arr1 = [["John", 23], ["cat", 2]];
arr1.push(["dog", 3]);
// unshift() adds to the front of a function
arr1.unshift(["Paul", 35]);

// Pop function manipulation (subtract)
var removedFromMyArray = arr1.pop();
// this value should now be either 2 or 3 depending if the .push applied first.
// pop removes the last function while .shift removes the first. example:
var removedFromArr1 = arr1.shift();

// Skills test of a basic shopping list
var myList = [["chocolate", 2], ["eggs", 4], ["bacon", 2], ["milk", 4], ["bread", 1]];

// Functions
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

// Passing values to functions using arguments
function functionWithArgs(arg1, arg2) {
    console.log(arg1 + arg2);
}
functionWithArgs(1, 2);

// global scope and Functions
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}
// This was included code I haven't learned yet.
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

// Local scope and functions
function myLocalScope() {
    var localScope = "";
    console.log('inside myLocalScope', localScope);
}
myLocalScope();
console.log('outside myLocalScope', localScope);

// Learning Return functions
function timesFive(num) {
    return num * 5;
}
timesFive(5);

//Assigning returned values
var processed = 2;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);

// Booleans, true and false
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
}
// Equality operator (==) and use with boolean expressions
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
testEqual(10);
// Strict Equality operator (===) does not convert type so '3' is different than num 3
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}
testStrict(10);
// Inequality operator (!=)
function testNotEqual(val){
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}
testNotEqual(10);

// Strict Inequality operator (!==)
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}
testStrictNotEqual(10);

// Greater than operator (>)
function testGreaterThan(val) {
    if (val > 100) { 
      return "Over 100";
    }
    if (val > 10) {
      return "Over 10";
    }
    return "10 or Under";
}
testGreaterThan(10);

// Greater than equal to operator (>=)
function testGreaterOrEqual(val) {
    if (val >= 20) { 
      return "20 or Over";
    }
  
    if (val >= 10) { 
      return "10 or Over";
    }
  
    return "Less than 10";
}
testGreaterOrEqual(10);

// Less than operator (<)
function testLessThan(val) {
    if (val < 25) { 
      return "Under 25";
    }
  
    if (val < 55) { 
      return "Under 55";
    }
  
    return "55 or Over";
}
testLessThan(10);

// Less than equal to (<=)
function testLessOrEqual(val) {
    if (val <= 12) {
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) { 
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
}
testLessOrEqual(10);

// Logical And operator (&&)
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}
testLogicalAnd(10);

// Logical OR operator (||)
function testLogicalOr(val) {
    if (val > 20 || val < 10) {
      return "Outside";
    }
    return "Inside";
}
testLogicalOr(15);

// Else statements
function testElse(val) {
    var result = "";
    if (val > 5) {
      result = "Bigger than 5";
    }
    else {
      result = "5 or Smaller";
    }
    return result;
}
testElse(4);

// Else If statements
function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }
    else if (val < 5) {
        return "Smaller than 5";
    }
    else {
        return "Between 5 and 10";
    }    
}
testElseIf(7);

// Chaining If Else statements in proper order
function testSize(num) {
    if (num < 5) {
      return "Tiny";
    }
    else if (num < 10) {
      return "Small";
    }
    else if (num < 15) {
      return "Medium";
    }
    else if (num < 20) {
      return "Large";
    }
    else {
      return "Huge";
    }
}
testSize(7);

// Par strokes coding challenge
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}
golfScore(5, 4);

// Switch statements (still a bit unclear)
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
      case 1:
        return "alpha";
        break;
      case 2:
        return "beta";
        break;
      case 3:
        return "gamma";
        break;
      case 4:
        return "delta";
        break;
    }
    return answer;
}
caseInSwitch(1);

// switch continued. (getting clearer)
function switchOfStuff(val) {
    var answer = "";
    switch(val) {
      case "a":
        return "apple";
        break;
      case "b":
        return "bird";
        break;
      case "c":
        return "cat";
        break;
      default:
        return "stuff";
        break;
    }
    return answer;
}
switchOfStuff(1);

// Multiple switch options
function sequentialSizes(val) {
    var answer = "";
    switch(val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
    return answer;
}
sequentialSizes(1);

// converting else if to switch challenge
function chainToSwitch(val) {
    var answer = "";
    switch(val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1:
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
    }
    return answer;
}
chainToSwitch(7);

// Counting cards challenge (I did this with no hints im so happy :D!)
var count = 0;

function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count --;
      break;
  }
  if (count > 0) {
    return (count + " Bet");
  } else {
    return (count + " Hold");
  }
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

// Javascript Objects intro
var myDog = {
  "name": "Fluffers",
  "legs": 4,
  "tails": 2,
  "friends": ["Me", "Myself", "Irene"]
};

// Objects continued
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

// Object oriented bracket notation
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];

// Accessing Object properties with variables
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];

// Updating Object Properties
var myDog = {
  "name": "Fluffers",
  "legs": 4,
  "tails": 2,
  "friends": ["Me", "Myself", "Irene"]
};
myDog.name = "Sir Borks";

// Adding object properties (similar to updating)
var myDog = {
  "name": "Fluffers",
  "legs": 4,
  "tails": 2,
  "friends": ["Me", "Myself", "Irene"]
};
myDog.bark = "woof";

// Deleting properties from an object
var myDog = {
  "name": "Fluffers",
  "legs": 4,
  "tails": 2,
  "friends": ["Me", "Myself", "Irene"]
};
delete myDog.tails;

// Using objects for lookups
function phoneticLookup(val) {
  var result = "";
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
}
phoneticLookup("charlie");

// Testing objects for properties (I still dont really understand this)
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

// Manipulating complex objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
,
  {
    "artist": "Green Day",
    "title": "Dookie",
    "release_year": 1994,
    "formats": [
      "CD",
      "Torrent",
      "Cassette"
    ]
  }
];

// Accessing Nested Objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

// Accessing nested arrays
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];
var secondTree = myPlants[1].list[1];

// Record Collection challenge (failed)
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};
function updateRecords(object, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && !object[id].hasOwnProperty("tracks")) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop];
  }
  return object;
}
updateRecords(collection, 5439, 'artist', 'ABBA');

// Iterating While Loops in JS
var ourArray = [];
var i = 5;
while (i >= 0) {
  ourArray.push(i);
  i--;
}

// Iterate For Loops in JS (1-5)
var ourArray = [];
for (var i = 1; i < 6; i++) {
  ourArray.push(i);
}

// Odd for loops (1-9)
var myArray = [];
for (var i = 1; i < 11; i += 2) {
  myArray.push(i);
}

// Counting backwards with a For loop
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// iterating through an array with a for loop
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Nesting For loops
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }
  }
  return product;
}

// Iterating Do/ While Loops in JS
var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5);

// Replacing loops using recursion
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

// Profile lookup challenge
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];
function lookUpProfile(name, prop) {
  for ( var i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
          if (prop in contacts[i]) {
              return contacts[i][prop];
          } else return "No such property";
      }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");

// Random number generation
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// Random number generation in a range of whole numbers
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// converting string to an integer
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// ParseInt with radix 
function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");

// Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);

// Multiple conditional operators
function checkSign(num) {
  return (num > 0 ) ? "positive"
  : (num < 0) ? "negative"
  : "zero"
}
checkSign(10);

// Recursion to create a countdown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1);
    countArray.unshift(n);
    return countArray
  }
}

// Recursion to create a range of numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
  return [startNum];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray;
  }
};