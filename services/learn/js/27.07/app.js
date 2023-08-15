const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const result = document.getElementById('result')
const btn = document.getElementById('submit')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
let action = '+'


plus.onclick = function () {
    action = '+'
}

minus.onclick = function () {
    action = '-'
}

function presult(res) {
    if (res < 0) {
        result.style.color = 'red'
    }
    else {
        result.style.color = 'green'
    }
    result.textContent = res
}

function getAction(input1, input2, actionSymbol) {
    const num1 = Number(input1.value)
    const num2 = Number(input2.value)
    return action == '+' ? num1 + num2 : num1 - num2
    
}

btn.onclick = function () {
    const result = getAction(input1, input2, action)
    presult(result)
    
}

