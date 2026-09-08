//arrays

const myArr = [0,1,2,3,4,5]
const myheros = ["shaktiman","nagaraj"]

const myarr2 = new Array(1,2,3,4)
// console.log(myarr2)
// console.log(myArr[2])

myArr.push(6)
// console.log(myArr)
myArr.push(7)
myArr.pop()

myArr.unshift(9)

myArr.shift(9)

// console.log(myArr.includes(8))
// console.log(myArr.indexOf(3))
// console.log(myArr)


const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)

// console.log(typeof newArr)


//slice,splice

// console.log("A",myArr)

const myn1 = myArr.slice(1,3)

// console.log(myn1)
// console.log("B",myArr)

const myn2 = myarr2.splice(1,3)
// console.log("c",myArr)
// console.log(myn2)


//part2//

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)


const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.from({name:"hitesh"}))//intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))