//this
`
const a = {
    d: 122,
    qwerty: 'qwerty',
    func: function () {
        console.log(this.d, this.qwerty)
    },
    buble: 'id',
    keys() {
        console.log('keys:', Object.keys(this)) //печатает ключи
    }
}

const anything = {
    w: 12,
    j: 'ab',
}

a.keys() //все ключи a 
const bound = a.keys.bind(anything) //bind перенаправляет this в обьекте на другой обьект
bound()


a.keys.call(anything) // то же что bind но сразу вызывает фунцию
`

class firstCls{
    pravda = true
    static ferrum = 11   //static параметры не переходят к экземплярам класса и имеются лишь у него самого
}

class cls extends firstCls{            //наследование методов и параметров от firstCls
    constructor (name, age) {
        super()                      //передает параметры из родительского конструктора
        this.name = name ?? 'undefinded name'
        this.age = age ?? 'undefined age'
    }

    sayHello() {
        console.log('hello from ', this.name) //метод класса
    }
}

const obj = new cls('supra', 333)
console.log(obj.pravda)