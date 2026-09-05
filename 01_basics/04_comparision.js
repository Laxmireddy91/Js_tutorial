console.log(2==1)
console.log(2!=1)

console.log("2">1)
console.log("02">1)

console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)

//===
console.log("2"===2)

//memory

//stack(primitive) , heap(non-primitive)

let myYoutubename = "hiteshchoudarydotcom"

let anothername = myYoutubename
anothername = "caiaurcode"

console.log(myYoutubename)
console.log(anothername);

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"
