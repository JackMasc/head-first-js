let products = [
    { name: "Grapefruit", calories: 170, sold: 8200},
    { name: "Orange", calories: 160, sold: 4200},
    { name: "Cola", calories: 210, sold: 4899},
    { name: "Diet Cola", calories: 0, sold: 3200},
    { name: "Lemon", calories: 200, sold: 1000},
    { name: "Raspberry", calories: 15, sold: 3240},
    { name: "Root Beer", calories: 20, sold: 3200}
];

function compareName(colaA, colaB) {
    if (colaB.name > colaA.name) {return -1}
        
    else if (colaB.name < colaA.name) {return 1}
    else {return 0}
}

products.sort((colaA, colaB) => colaB.sold - colaA.sold)
console.log(products)
products.sort((colaA, colaB) => colaB.calories - colaA.calories)
console.log(products)
products.sort(compareName)
console.log(products)

let colas = products.filter((cola) => cola.name.includes("Cola"))
console.log(colas)

let cases = products.map(cola => Math.floor(cola.sold/12))
console.log(cases)

let total = cases.reduce((acc, v) => acc + v, 0)
console.log(total)

let funnyString = products.reduce((acc, product) => acc + product.name.charAt(0), "")
console.log(funnyString)