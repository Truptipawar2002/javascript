// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
        
    }

    // console.log(element);
}

for (let i = 1; i <= 5; i++) {
    // console.log(`VALUE OF I IS ${i}`);
    
    for (let j = 1; j <= 5; j++){
        // console.log(`VALUE OF J IS ${j} AND I IS ${i}`);
        // console.log(i + '*' + j + '=' + i * j);
        
    
    }
}

let myArray = ["apple", "banana", "orange"]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i]);
    const element = myArray[i];
    // console.log(`Element is ${element}`);
    
}

// break and continue

for (let i = 1; i <= 20; i++) {
     console.log(`VALUE OF I IS ${i}`);
    if (i === 5) {
        console.log(`detected 5`);
         continue; // skip the rest of the loop and continue with the next iteration
    }
    console.log(`VALUE OF I IS ${i}`);
    
}
