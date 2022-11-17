//Linking
/*
let js = "Amazing"

if (js === "Amazing") alert("Javascript is Fun")
console.log(js)
*/

//Value and Variables

/*
let firstName = "Rahul"
console.log(firstName)
console.log(firstName)
console.log(firstName)
console.log(firstName)

let lastName = "Sam"
console.log(lastName)
console.log(lastName)
console.log(lastName)
*/

//DataTypes
/*
true
let javascript = "True"
console.log(javascript)
let name = true
let age = 23
let dom

console.log(name)
console.log(age)
console.log(dom)
console.log(typeof javascript)
*/

//let , const and var
/*
let firstName = "rahul"
firstName = "sam"
console.log(firstName)

const secondName = "train"
console.log(secondName)

var lastName = "dom"
lastName = "tim"
console.log(lastName)
*/

//Basic Operator

//Operator Precedence

// Coding Challenges
/*
let markWeight = 78
let markHeight = 1.69

let johnWeight = 92
let johnHeight = 1.95

let markBMI = markWeight / (markHeight * markHeight)
console.log(markBMI)

let johnBMI = johnWeight / (johnHeight * johnHeight)
console.log(johnBMI)


*/
// Template literals
/*
let firstName = "Sam"

const state = `I m gonna win match with ${firstName}`

console.log(state)
*/

//If else
/*
let age = 23

if (age == 23) {
	console.log(`You can have bear`)
} else {
	console.log(`You can not have a cup of coffee`)
}
*/

//Coding Challenges n0 2

/*
let markWeight = 78
let markHeight = 1.69

let johnWeight = 92
let johnHeight = 1.95

let markBMI = markWeight / (markHeight * markHeight)
console.log(markBMI)

let johnBMI = johnWeight / (johnHeight * johnHeight)
console.log(johnBMI)

if (markBMI > johnBMI) {
	console.log(`Mark BMI is higher`)
} else if (johnBMI <= markBMI) {
	console.log(`John BMI is higher`)
}
*/

//Type Conversion and Coecision

//Truly true and false

// Equality Operator ==  and ===

//Boolean Logic AND, OR and NOT

//Logical Operator

// Coding Challenges

// <---Calculate the Average of the Score--->>

/*
const scoreDolphins = (96 + 108 + 89) / 3
const scoreKoolas = (88 + 99 + 110) / 3

console.log(scoreDolphins, scoreKoolas)

if (scoreDolphins > scoreKoolas && scoreDolphins > 100) {
	console.log(`Dolphins wins`)
} else if (scoreKoolas > scoreDolphins && scoreKoolas > 100) {
	console.log(`Koolas wins`)
} else if (
	scoreDolphins === scoreKoolas &&
	scoreKoolas > 100 &&
	scoreDolphins > 100
) {
	console.log(`Both Wins`)
} else {
	console.log(`Both loss`)
}
*/

//Switch Statements
/*
let day = "ii"

switch (day) {
	case "monday":
		console.log(`Monday is good plan the day`)
		break

	case "tuesday":
		console.log(`Tuesday is good plan the day`)
		break
	case "wednesday":
		console.log(`Wednesday is good plan the day`)
		break
	case "thursday":
		console.log(`Thursday is good plan the day`)
		break
	case "friday":
		console.log(`Friday is good plan the day`)
		break
	case "saturday":
		console.log(`Saturday is good plan the day`)
		break
	case "sunday":
		console.log(`Sunday is good plan the day`)
		break
	default:
		console.log(`No good day`)
}
*/

//Statement and Expression
//Expression produce a value
//Statement does not produce a value on its own

//The Ternary Operator

/*
const age = 23
const drink = age > 19 ? "Drink Wine" : "Drink water"
console.log(drink)

*/
/*
const bill = 40
const tip = bill <= 300 && bill > 50 ? bill * 0.15 : bill * 0.25

console.log(`The Bill value is ${40} and tip you should pay is ${tip}`)
*/

// Use Strict Mode
/*
"use strict"
let hasLicense = false
const passTest = true

if (passTest) hasLicense = true
if (hasLicense) console.log(`We have license `)
*/

//Function
/*
//Type1
function logger() {
	console.log(`WWE is the bess show`)
}

logger()

//Type 2
function fruitProcessor(apples, oranges) {
	console.log(apples, oranges)
	const juice = `Apples are great when it is ${apples}
	and oranges are great when it is ${oranges}`

	return juice
}

const appleAndOrangeJuice = fruitProcessor(5, 4)
console.log(appleAndOrangeJuice)
*/

// Function Expression(values) and Function Declearation
/*
calculatorAge()
function calculatorAge() {
	console.log("OKOK is good")
}

calculatorYear = function () {
	console.log("OKOK is Bad")
}
calculatorYear()
*/

//Arrow Function
/*
const calculatorYear = () => {
	console.log("OKOK is good")
}

calculatorYear()

const age = (birthYear) => {
	let year = birthYear + 10
	return year
}

let myage = age(11)
console.log(myage)
*/

// Function Callling other
/*
const fruitCut = (fruits) => {
	return fruits * 4
}

const fruitmaker = (apples, oranges) => {
	const applejuice = fruitCut(apples)
	const orangesjuice = fruitCut(oranges)

	const juice = `We have juice if ${applejuice} and ${orangesjuice}`
	return juice
}

const maker = fruitmaker(5, 3)
console.log(maker)
*/
//Reveiwing FUnctions
/*
const calAge = (birthYear) => {
	return birthYear + 20
}

const functionyear = function (birthYear, firstName) {
	const age = calAge(birthYear)
	return `The age is ${age} and ${firstName}`
}

const dragon = functionyear(1989, "SAM")
console.log(dragon)
*/
// Coding Challenges
/*
const calAverage = (d1, d2, d3) => {
	return (d1 + d2 + d3) / 3
}

const DolphinsAvg = calAverage(44, 23, 71)
const Koolas = calAverage(65, 54, 49)

const checkWinner = (DolphinsAvg, Koolas) => {
	if (DolphinsAvg > Koolas) {
		return `Dolphins wins`
	} else {
		return `Koolas Win`
	}
}

const winner = checkWinner(DolphinsAvg, Koolas)
console.log(winner)
*/

//Arrays
/*
const p1 = "John"
const p2 = "SAm"
const p3 = "DE"
const p4 = "DD"

const person = [p1, p2, p3, p4]
console.log(person)

const person2 = new Array("Dom", "Jen")
console.log(person2)

const person3 = [23, "Ram", null]
console.log(person3)

const years = [122, 122, 33, 44]
const calAge = (years) => {
	return years * 2
}
console.log(calAge(years[0]))
*/

//Basic Array methods
/*
const friends = ["Rob", "Fren", "Dom"]
console.log(friends)

const newLength = friends.push("Sam")

console.log(newLength)

const ok = friends.unshift("Jonas")
console.log(friends)

const popper = friends.pop()
console.log(popper)
console.log(friends)

const removefrist = friends.shift("Rahul")
console.log(friends)

console.log(friends.indexOf("Rob"))

console.log(friends.includes("Rob"))

if (friends.includes("Rob")) {
	console.log("You have friends")
} else {
	console.log("You are alon")
}*/

//Coding Challenges
/*
const tip = bill <= 300 && bill > 50 ? bill * 0.15 : bill * 0.25

console.log(`The Bill value is ${40} and tip you should pay is ${tip}`)

const caltip = function (bill) {
	const tip = bill <= 300 && bill > 50 ? bill * 0.15 : bill * 0.25
	return till
}
*/

//Introduction to Objects
/*
const jonas = {
	firstname: "Jonas",
	lastname: "Rom",
	bday: 2037 - 2018,
	job: "teacher",
	firends: ["Rem", "Light", "Kevin"],
}

console.log(jonas.firstname)
console.log(jonas["firstname"])

//Dot vs Bracket
const interestedIn = prompt("What you  like ")
console.log(jonas[interestedIn])

console.log(
	`${jonas.firstname} has ${jonas.firends.length} and best friend is ${jonas.firends[0]}`
)
*/
//Objects methods
/*
const rem = {
	firstname: "Rahul",
	lastname: "YoYo",
	address: "WCl",
	bday: 2020 - 2 - 2,
	birthYear: 1998,
	friends: ["Micheal", "You", "TERE"],
	calAge: function () {
		console.log("I m this", this)
		return this.birthYear - 30
	},
}

const calAgeofrem = rem.calAge()
console.log(calAgeofrem)
// console.log(rem["calAge"](2022))
*/

// const person = {
// 	firstName: "Sam",
// 	lastName: "Ram",
// 	address: "WCl",
// 	birthYear: 2000,
// 	friends: ["Sandeep", "Vicky", "Deepak"],

// 	getSummary: function () {
// 		return `${this.firstName} ${this.lastName} is friend of
// 		`
// 	},
// }

// const detail = person.getSummary()
// console.log(detail)

//Coding Challenges
/*
const mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2
		return this.bmi
	},
}

const john = {
	fullName: "John Smith",
	mass: 97,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / this.height ** 2
		return this.bmi
	},
}

mark.calcBMI()
john.calcBMI()

console.log(mark.bmi)
console.log(john.bmi)

if (mark.bmi > john.bmi) {
	console.log(`I m marks `)
} else {
	console.log(`I m john`)
}
*/

//Iteraion through loops

// for (let i = 0; i < 11; i++) {
// 	console.log(`Weights  ${i}`)
// }

//Looping Array, Breaking andcontinuous
/*
const jonas = ["Rahul", 45, "singh", 23, true]
const types = []
for (let i = 0; i < jonas.length; i++) {
	console.log(jonas[i], typeof jonas[i])

	// types[i] = typeof jonas[i] 1way
	// types.push(typeof jonas[i]) 2way
}

console.log(types)

const years = [1998, 1999, 2000, 2001]
const age = []
for (let i = 0; i < years.length; i++) {
	age.push(2037 - years[i])
}
console.log(age)

//continue and brea

console.log("----ONLY String----")
for (let i = 0; i < jonas.length; i++) {
	if (typeof jonas[i] !== "string") continue
	console.log(jonas[i], typeof jonas[i])
}

console.log("----ONLY Number----")
for (let i = 0; i < jonas.length; i++) {
	if (typeof jonas[i] === "number") break
	console.log(jonas[i], typeof jonas[i])
}
*/

//Looping Backwards
// const jonas = ["Rahul", 45, "singh", 23, true]

// for (let i = jonas.length; i > 0; i--) {
// 	console.log(jonas[i])
// }
// const sam = {
// 	firstName: "Rahul",
// 	lastName: "Singh",
// }

// Coding Challenges

const data = [17, 21, 23]
// console.log(data)
const printforecast = function (data) {
	console.log(data)
	let str = ""
	for (let i = 0; i < data.length; i++) {
		str = str + `..${data[i]} is the ${data[i]} days`
	}
	console.log(str)
}
let result = printforecast(data)
console.log(result)
