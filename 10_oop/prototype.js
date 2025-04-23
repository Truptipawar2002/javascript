// let myName = "Trupti     "
// let mychannel = "chai     "

// console.log(myName.lenght);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.trupti = function(){
    console.log(`trupti is present in all objects`);
    
}

Array.prototype.heytrupti = function(){
     console.log(`Trupti says hello`);
     
}

// heroPower.trupti()
myHeros.trupti()
myHeros.heytrupti()
// heroPower.heytrupti()

// inheritance
const User = {
    name : "chai",
    email : "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment : 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLenght = function(){
    // console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True lenght is: ${this.trim().lenght}`);
    
}

anotherUsername.trueLenght()
"trupti".trueLenght()
"icetea".trueLenght()