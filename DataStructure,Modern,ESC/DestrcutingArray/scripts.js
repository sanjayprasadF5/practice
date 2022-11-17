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
}
console.log(restaurant.starterMenu[1])
const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x, y, z] = arr
// console.log(x, y, z)
// console.log(a, b, c)
// console.log(arr)

let [main, secondary] = restaurant.categories

// console.log(main, secondary)
;[first, secondary] = [secondary, main]

// console.log(first, secondary)

const [start, main2] = restaurant.order(2, 0)

console.log("Here is the thing", start, main2)

const nested = [2, 4, [5, 6]]

const [i, , [j, k]] = nested
console.log(i, j, k)

const newArray = [1, 2, 3]
const [m, n] = newArray
console.log(m, n)
console.log("Destrucitng Done")
