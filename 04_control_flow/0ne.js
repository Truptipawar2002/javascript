// if 

// const isUserloggedIn = true
// const temperature = 41

// if (temperature <= 40){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
    
// }
// console.log("executed");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
    
// }

//  console.log(`user power: ${power}`);

//implicit scope


// if (balance > 500) console.log("test"), console.log("test2");

// const balance = 1000

// if (balance < 500) {
//     console.log("less than 500");
    
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 1200");
// } else {
//     console.log("less than 1200");
    
// }
// console.log("exwcuted");

const isUserloggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserloggedIn && debitcard && 2==3) {
    console.log("Allow to buy courses");
    
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("User logged in");
    
}