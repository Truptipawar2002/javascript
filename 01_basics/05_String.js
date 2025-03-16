const name = "Tripzz"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log('Hello my name is ${name} and my repo count is ${repoCount}');
//use placeholder to var
const gameName = new String('tripzz')


console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
//exclusive of index 2 and -indexes are not accepted
console.log(newString);

const anotherString = gameName.slice(-8, 4)
//negative indexes accepted
console.log(anotherString);

const newString1 = "    trupti    "
// console.log(newString1);
console.log(newString1.trim());

 const url = "https://tripzz.com/trip%10p"

 console.log(url.replace('%10','*'))

 console.log(url.includes('trip'))


