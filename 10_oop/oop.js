const user = {
    username: "trupti",
    loginCount: 8,
    SignedIn: true,

    getUserDetails: function(){
        // console.log("get user details from database");
        // console.log(`Username: ${this.username}`);
       // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, logincount, isLoggedIn){
    this.username = username;
    this.logincount = logincount;
    this.isLoggedIn = isLoggedIn

    // return this

}

const userOne = new  User("trupti", 13, true)
const userTwo = new User("sanju", 14, false)
console.log(userOne);
console.log(userTwo);




