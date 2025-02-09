const accountId = 332211     //const is fixed is Unchangable
let accountEmai = "truptip@gmail.com" //
var accountPassword = "12344"      //least used the scope problem
accountCity = "Pune"              //can be declared
let accountState = "Maharashtra";

// accountId = 2 # This is wrong, you can't reassign or change value of a const variable
// TypeError: Assignment to constant variable. #  Try to read and understand errors, you will find it their most probably

accountEmai = "hr@hc.com"
accountPassword = "212121"
accountCity = "Bengaluru"


console.log(accountId); 
/*  
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmai, accountPassword, accountCity, accountState])