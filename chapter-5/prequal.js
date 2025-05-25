let topolino = {
    year: 2022,
    km: 100,
}

function filter(car) {
    if (car.year < 2020) {
        return false
    } else if (car.km > 10000) {
        return false
    }
    return true
}

let isgood = filter(topolino)
console.log(isgood)