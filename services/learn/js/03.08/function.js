`let counter = 0
const interval = setInterval(function () {
    if (counter === 5) {
        clearInterval(interval)
    } else {
        console.log(++counter)
    }
}, 1000)

const arrow = (name) => {
    return name.repeat(3)
}

const arrow2 = (name, fat) => console.log(name + ' ' + String(fat))

console.log(arrow('ya sigma '))
arrow2('king', 233)

const arrow = (num, exp) => Math.pow(num, exp)

console.log(arrow(2, 3))


const arrowSum = (...numbers) => {
    return numbers.reduce((acc, cur) => (acc += cur), 0)
}

console.log(arrowSum(2, 1, 3, 4))`


