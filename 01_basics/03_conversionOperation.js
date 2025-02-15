let score = "33abc"
// let score = null
// let score = undefined
// let score = true


//console.log(typeof score);    //both works fine and ; is optional
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// NaN since 33abc is not a pure number
// O since there's NULL
// NaN for undefined type
// 1 for true


let isLoggedIn = "trupti"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);
// true for 1
//true for any other string "trupti"
//false for empty string " "

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//--------------operations---------------

let value = 3
let negvalue = -value
//console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Trupti"

let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1"+ 2 + 2);
// console.log( 1 + 2 + "2");
// console.log( (3 + 4) * 5 % 3);


// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;    // prefix increment
// gameCounter++;    // postfix increment
console.log(gameCounter);


