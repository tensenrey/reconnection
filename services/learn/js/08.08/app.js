


const list = document.querySelector('#list')
const filter = document.querySelector('#filter')
let USERS = []

filter.addEventListener('input', (event) => { //каждое изменение инпута
    const value = event.target.value.toLowerCase()   //что находится в инпуте
    const filtered = USERS.filter((user) => user.name.toLowerCase().includes(value))
    render(filtered)

})

async function start() {list.innerHTML = 'Loading...'
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        setTimeout(() => {
            USERS = data
            render(data)
        }, 2000)
        
    } catch (err) {
        list.style.color = 'red'
        list.innerHTML = 'failed to fetch'
    }
}

function render(users = []) {
    if (users.length === 0) {
        list.innerHTML = 'no matched users'
    } else {
        const html = users.map(toHTML).join('')
        list.innerHTML = html
    }
    
}



function toHTML(user) {
    return `
    <li class="list-group-item">${user.name}</li>`
}

start()