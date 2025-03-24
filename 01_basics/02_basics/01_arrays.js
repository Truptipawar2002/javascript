// array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["vickykaushal", "sharukh"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);
console.log(myArr2[1]);

// Array method

 myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);


myArr.unshift(15)  //to insert at begining
myArr.shift()   //to pop from begining
console.log(myArr);

console.log(myArr.includes(7));
console.log(myArr.indexOf(9));
console.log(myArr);

const newArr = myArr.join() //to convert entire array into a string

console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) //gives elements from index 1 to 2

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn1);
console.log(myn2);







