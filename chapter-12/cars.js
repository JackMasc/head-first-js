class Car {
    static counter = 0
    constructor(make, model, year, color, passengers, convertible, mileage) {
        this.make = make
        this.model = model
        this.year = year
        this.color = color
        this.passengers = passengers
        this.convertible = convertible
        this.mileage = mileage
        Car.counter++
    }
    start() {
        this.started = true
        console.log(`The ${this.make} ${this.model} has started!`)
    }
    stop() {
        this.started = false
        console.log(`The ${this.make} ${this.model} has stopped!`)
    }
    drive() {
        if (this.started) {
            console.log(`${this.make} ${this.model} goes zoomm!!`)
        } else {
            console.log(`${this.make} ${this.model} needs to be started first`)
        }
    }
    brake() {
        console.log(`The ${this.make} ${this.model} is braking`)
    }
    get km() {return this.mileage * 1.61}
    set km(newKm) {this.mileage = newKm/1.61}
}

class Taxi extends Car {
    constructor(make, model, year, color, passengers, convertible, mileage, fare) {
        super(make, model, year, color, passengers, convertible, mileage)
        this.occupied = false
        this.fare = fare
    }
    hail() {
        if (this.occupied) {
            console.log(`The ${this.make} ${this.model} Taxi is occupied`)
        } else {
            console.log(`You can hop on the ${this.make} ${this.model} Taxi`)
            this.occupied = true
        }
    }
    pay() {
        if (this.occupied) {
            console.log(`Customer is paying the ${this.make} ${this.model} Taxi`)
            this.occupied = false
        } else {
            console.log(`The ${this.make} ${this.model} Taxi is empty`)
        }

    }
}

let dacia = new Car("Dacia", "Sandero", "2020", "gray", 5, false, 25000)
let twingo = new Car("Renault", "Twingo", "2015", "blue", 4, false, 47000)

let cars = [dacia, twingo]

cars.forEach(car => {
    car.start()
    car.drive()
    car.brake()
    car.stop()
})

let taxi = new Taxi("Fiat", "Panda", "2023", "yellow", 5, false, 110000, 50)
taxi.start()
taxi.drive()
taxi.hail()
taxi.drive()
taxi.hail()
taxi.pay()
taxi.stop()
console.log(taxi.km)