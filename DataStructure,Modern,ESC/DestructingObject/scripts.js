console.log("---------------------------------------------------------------")
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],
	order: function (starter, mainmenu) {
		return [this.starterMenu[starter], this.mainMenu[mainmenu]]
	},
	openingHours: {
		thursday: {
			open: 12,
			close: 12,
		},
		friday: {
			open: 13,
			close: 13,
		},
		saturday: {
			open: 14,
			close: 14,
		},
	},
	// orderDevilery: function ({ starterIndex, mainIndex, time, address }) {
	// 	console.log(starterIndex, mainIndex, time, address)
	// 	console.log(obj)
	// },
}

// restaurant.orderDevilery({
// 	time: "22:30",
// 	address: "WCL",
// 	mainIndex: 2,
// 	starterIndex: 2,
// })

console.log("Destrcuting Objects---------------------------------------------")
//Destrucitng Objects

// const { name, openingHours, categories } = restaurant
// console.log(name, openingHours, categories)

// const {
// 	name: restaruntName,
// 	openingHours: Hourse,
// 	categories: Cat,
// } = restaurant
// console.log(restaruntName, Hourse, Cat)

// const { menu = [], starterMenu: starter = [] } = restaurant
// console.log(menu, starter)

// const {
// 	friday: { open, close },
// } = restaurant.openingHours
// console.log(open, close)

// console.log(restaurant.starterMenu[1])
// const arr = [2, 3, 4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [x, y, z] = arr
// // console.log(x, y, z)
// // console.log(a, b, c)
// // console.log(arr)

// let [main, secondary] = restaurant.categories

// // console.log(main, secondary)
// ;[first, secondary] = [secondary, main]

// // console.log(first, secondary)

// const [start, main2] = restaurant.order(2, 0)

// console.log("Here is the thing", start, main2)

// const nested = [2, 4, [5, 6]]

// const [i, , [j, k]] = nested
// console.log(i, j, k)

// const newArray = [1, 2, 3]
// const [m, n] = newArray
// console.log(m, n)
// console.log("Destrucitng Done")

// Spread Operator
console.log("Spread Operator started")
const arr = [1, 2, 3]

const newbadArr = [7, 8, 9, arr[0], arr[1], arr[2]]
console.log("newbadArr", newbadArr)

const goodArray = [1, 2, 3, ...arr]
console.log("goodArray", ...goodArray)

// Iterables: string ,map, array, not object
