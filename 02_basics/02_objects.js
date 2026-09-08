//singleton 
//Object.create

//object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Hitesh",
    "full name" :"hitesh choudary",
   [ mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"hitesg@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["moday","sturady"]

}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email="hitesh11@gmail.com"
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    // console.log("hello js user")
}

jsUser.greetingTwo = function(){
    // console.log(`hello js user,${this.name}`)
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())


//part2///


// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "1234"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname : "hitesh",
            lastname:"choudary"
        }

    }
}
// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {
     1:"a",
    2:"b"}
const obj2 = {
    3:"a",
    4:"b"
}
const obj4 = {
    5:"a",
    6:"b"
}
// const obj3 = {obj1,obj2}

// const obj3 = Object.assign(obj1,obj2)

// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2,...obj4}

console.log(obj3)

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
     {
        id:2,
        email:"h2@gmail.com"
    },
     {
        id:3,
        email:"h3@gmail.com"
    }
]

// console.log(users[1].email)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))