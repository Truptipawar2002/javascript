const user = {
    username: "Trupti",
    price: 333,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sanju"
// user.welcomeMessage()
// console.log(this);

// function one(){
//     let username = "Trupti"
//     console.log(this.username);
    
// }
// one()

// const chai = function(){
//     let username = "Trupti"
//     console.log(this.username);
        
// }

const chai = () => {
    let username = "Trupti"
    console.log(this.username);
        
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2

// }

// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) =>  ({username: "trupti"})


console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()