//const array = [1, 2, 3, 4, 46]
// const strarray = ['a', 'b', 'c', null, 231]
//const array = new Array(1, 2, 3, 4, 5, 6)

//array[1] = 'tutu'
//console.log(array[1])

const text = document.getElementById('title')
const btn = document.getElementById('create')
const list = document.getElementById('list')


/*function render() {
    for (let note of notes) {
        list.insertAdjacentHTML('beforeend', getnote(note))
    }
}

render()*/

btn.onclick = function () { 
    if (text.value.length === 0) {
        return
    } 
    const newNote = {
        title: text.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    text.value = ''
    
}

list.onclick = function (event) {
    if (event.target.dataset.index) { //true если не пустые
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
    render()
    }
}

function getnote(note, index) {

    return `<li
    class="list-group-item d-flex justify-content-between align-items-center">
    <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
    <span>
    <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
    <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
    </span>
    </li>`
}

const notes = [
    {
    title: 'сходить в магазин',
    completed: false,
    }, 
    {
    title: 'поесть',
    completed: false,
    }, 
    {
    title: 'поспать',
    completed: false,
    }, 
]

function render() {
    list.innerHTML = ''
    if (notes.length === 0) {
        list.innerHTML = '<p>Нет элементов</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        list.insertAdjacentHTML('beforeend', getnote(notes[i], i))
    }
}

render()