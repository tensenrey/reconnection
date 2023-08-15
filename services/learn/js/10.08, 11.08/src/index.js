//    CLASSES            CLASSES             CLASSES           CLASSES              CLASSES            


class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Метод toHTML должен быть реализован')
    }
}

class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const styles = this.options.styles
        return row(col(`<p>${this.value}</p>`), css(styles))
    }
}

class ListBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const styles = this.options.styles
        const html = this.value.map(col)
        return row(html.join(''), css(styles))
    }
}

class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {imageStyles, alt = '', styles} = this.options
        return row(col(`<image src="${this.value}" alt="${alt}" style="${css(imageStyles)}">`), css(styles))
    }
}

class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }
    render(model) {
        this.$el.innerHTML = ''
        model.forEach(block => {
            this.$el.insertAdjacentHTML("beforeend", block.toHTML())
        })
    }
}


class Sidebar {
    constructor(selector, updCallback) {
        this.$el = document.querySelector(selector)

        this.upd = updCallback

        this.initialization()
    }

    initialization() {
        this.$el.insertAdjacentHTML('afterbegin', this.template) //использование геттера this.template
        this.$el.addEventListener('submit', this.add.bind(this)) //слушаем нажатие submit и при нажатии запускаем функцию add
    }

    get template() {  //геттер
        return templateHTML('text')
    }

    add(event) {
        event.preventDefault() //нажатие на submit не обновит страницу, она останется динамической

        const type = event.target.name //получение имени формы в которой состоит нажатый submit
        const value = event.target.value.value //получение значения поля value после нажатия submit
        const styles = event.target.styles.value //то-же но поле styles

        //debugger //открывает в sources значения всех переменных на данный момент

        const newBLock = type === 'text' ? new TextBlock(value, {styles}) : new TitleBlock(value, {styles})

        this.upd(newBLock)


        event.target.value.value = ''
        event.target.styles.value = ''

    }
}

class App {
    constructor(model) {
        this.model = model
    }
    init() {
        const site = new Site('#site')

        site.render(this.model)

        const updCallback = newBLock => {
            this.model.push(newBLock)
            site.render(this.model)
        }

        new Sidebar('#panel', updCallback)
    }
}
//   MODELS         MODELS          MODELS         MODELS           MODELS         MODELS



const models = [
    new TitleBlock('Hello JS!', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
    }}),
    new TextBlock('somebody once told me the world is gonna roll me', {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
    }}),
    new ListBlock(['js', 'python', 'c++', 'rust', 'ruby'], {
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
    }}),
    
    new ImageBlock('./assets/image.png', {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {width: '500px', height: 'auto'},
        alt: 'Image'}),
]


//     DRAWING SITE        DRAWING SITE         DRAWING SITE         DRAWING SITE         DRAWING SITE


new App(models).init()


//           FUNCTIONS           FUNCTIONS           FUNCTIONS         FUNCTIONS            FUNCTIONS            

function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`
}

function col(content) {
    return `<div class="col-sm">${content}</div>`
}

function css(styles = {}) {
    if (typeof styles === 'string') return styles
    const toStr = (key => `${key}: ${styles[key]}`)
    return Object.keys(styles).map(toStr).join(';')
}

function templateHTML(type) {
    return `
    <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input class="form-control form-control-sm" name="value" placeholder="value">
        </div>
        <div class="form-group">
            <input class="form-control form-control-sm" name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr>
    `
}