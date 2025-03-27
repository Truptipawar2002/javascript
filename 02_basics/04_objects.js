// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Dimple"
tinderuser.idLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email : "dimplekhr@gmail.com",
    fullname:{
        userfullname:{
            firstname: "dimple",
            lastname: "patil"
        }
    }
}

// console.log(regularUser.fullname.email);

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}
const obj3 = {5: "a", 6:"b"}


// const obj3 = { obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
    },
    {
    },
    {
    },
]

users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "2000",
    courseInstructor: "trupti"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);

