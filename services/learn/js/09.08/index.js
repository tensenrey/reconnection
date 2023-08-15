const models = [
    {type: 'title', value: 'Hello JS'},
    {type: 'text', value: 'somebody once told me the world is gonna roll me'},
    {type: 'columns', value: [
        '1', '2', '3', '4', '5'
    ]} ,
]


const $site = document.querySelector('#site')

models.forEach(block => {
    let html = ''

    if (block.type === 'title') {
        html = title(block)
    } else if (block.type === 'text') {
        html = text(block)
        } else if (block.type === 'columns') {
            html = list(block)
        }
    $site.insertAdjacentHTML("beforeend", html)
})

function title(block) {
    return `
            <div class="row">
               <div class="col-sm">
                   <h1>${block.value}</h1>
               </div>
            </div>`
}

function text(block) {
    return `
    <div class="row">
        <div class="col-sm">
            <p>${block.value}</p>
        </div>
    </div>`
}

function list(block) {
    const html = block.value.map(el => `<div class="col-sm">${el}</div>`)
    return`
            <div class="row">
                ${html.join('')}
            </div>
    `
}