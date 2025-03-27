// singleton 

// object literals 

const mySym = Symbol("key1")

const Jsuser = {
    name: "TTrupti",
    "full name": "Trupti pawar",
     [mySym]:"mykey1",
    age: 20,
    location: "pune",
    email: "truptipawar@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]

}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "truptipawar@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email = "truptipawarmicrosoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
}

Jsuser.greetingTwo = function(){
    console.log('hello js user, ${this.name}');
}


console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());