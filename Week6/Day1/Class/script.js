// console.log("hello world")\

//JS Variables
// let x = 2
// console.log(x)
// let str = "Hello Everyone, please say hello to the class."
// let posUppercaseHello=str.indexOf("Hello");
// console.log(posUppercaseHello)

// let posLowercaseHello= str.indexOf("hello")
// console.log(posLowercaseHello)

// console.log(str.substring(0,5))

let addressNumber =123
let addressStreet = "Drury Lane"
let country = "Israel"
let globalAddress = "I live in " + " " +addressNumber+addressStreet +" "+ "in" + " "+country
console.log(globalAddress)

let globalAddressBetter = `I live in ${addressNumber} ${addressStreet} in ${country}`

console.log(globalAddressBetter)


let birthYear = 1990
let futureYear = 2042
let futureAge = futureYear - birthYear
let statementYear = `I will be ${futureAge} in ${futureYear}`
console.log(statementYear)

let petArray = ['cat','dog','fish','rabbit','cow']
petArray.splice(3, 1, "horse")
console.log(petArray[1])
console.log(petArray)
console.log(petArray.length)