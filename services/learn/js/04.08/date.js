const date = document.getElementById('output')
const btnFull = document.getElementById('full')
const btnDate = document.getElementById('date')
const btnTime = document.getElementById('time')
let mode = 'full'


//btnDate.onclick = function () {
//    date.textContent = now.toLocaleDateString()
//}

function bind(name) {
    return function () {
        mode = name
        upd()
    }
} 

btnFull.onclick = bind('full')

btnDate.onclick = bind('date')

btnTime.onclick = bind('time')

upd()
setInterval(() => upd(), 60)

function upd() {
    date.textContent = format(mode)
}


function format(formatMode) {
    const now = new Date()
    switch (formatMode) {
        case 'time':
            return now.toLocaleTimeString() + '.' + now.getMilliseconds()
        case 'date':
            return now.toLocaleDateString()
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default:
            return now.toLocaleTimeString()
    }
}