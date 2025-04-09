function sayMyname(){
    console.log("t");
    console.log("p");
    console.log("p");
    
}

// sayMyname()

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // console.log("trupti");
    // return result
    return number1 + number2
} 

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username = "trupi"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return '${username} just logged in'
    
}
  
// console.log(loginUserMessage("trupti"));
// console.log(loginUserMessage())

function calculatecarprice(var1, var2, ...num1){
    return num1
}

console.log(calculatecarprice(200, 300, 399, 500));

const user = {
    username: "Trupti",
    prices: 900
}

function handleObject(anyObject){
    console.log(` username is ${anyObject.username} and price is 
    ${anyObject.price} ` );
}

// handleObject(user)
handleObject({
    username: "Kanha",
    price: 333
})

const mynewArray = [200, 400, 500, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

