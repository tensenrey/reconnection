//const timeout = setTimeout(() => {console.log('2 sec')}, 2000)
//clearTimeout(timeout)

//function delay(callback, time = 1000) {
//    setTimeout(callback, time)
//}
//delay(() => console.log('timeout'))
`
const delay = (time = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve() // все работаит
            //reject('error') //ошибка
        }, time)
    })
    return promise
}

delay(2500)
    .then(() => {
        console.log('Timeout')
    })
    .then(() => {
        console.log('piu-piu', 222)
    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log('quqmber')
        console.log('turbazzza')
    })`


const getData = () => new Promise((resolve) => resolve([1, 2, 3]))


async function async() { //приписка async позволяет использовать await
    try { //делаем
        const data = await getData()
        console.log(data)
    } catch (err) { //если ошибка
        console.log(err)
    } finally { //в любом случае
        console.log('quqmber')
        console.log('turbazzza')
    }
}

async()




























