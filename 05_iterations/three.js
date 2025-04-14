// for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
     console.log(num);
    // console.log(`Value of iterator is ${iterator}`); 

}

const greetings = "hello" ;
for (const greet of greetings) {
    // console.log(char);
    // console.log(`Value of iterator is ${char}`); 

}

// Maps

const myMap = new Map()
myMap.set("name", "John")
myMap.set("age", 30)
myMap.set("city", "New York")


console.log(myMap);
 
for (const [key, value] of myMap){
     console.log(key, ':', value);
     console.log(`Key is ${key} and value is ${value}`);
    
}

const myObject = {
    'game': "NSF",           
    'game2': 'spiderman',
    'city': "New York"
}

// for(const [key, value] of myObject){
//      console.log(key, ':', value);
//     // console.log(`Key is ${key} and value is ${value}`);
// }

