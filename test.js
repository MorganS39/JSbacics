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
