//como funciona o promise
const myPromise = new Promise((resolve, reject) => {
    const name = 'joa';

    if (name === 'matheus') {
        resolve('o usuario foi encontrado')
    }else{
        reject('o usuario não foi encontrado')
    }
})

// manipulando o then
myPromise.then((data) => {
    console.log(data)       // forma sem manipular
})


const myPromise2 = new Promise((resolve, reject) => {
    const name = 'j';

    if (name === 'matheus') {
        resolve('o usuario foi encontrado')
    }else{
        reject('o usuario não foi encontrado')
    }
})



myPromise2.then((data) => {
    return data.toLowerCase()
})
.then((stringModificada) => {
        console.log(stringModificada) // forma manipulada
    })  

/////////////////////////////////////// com catch

const myPromise3 = new Promise((resolve, reject) => {
    const name = 'matheus';
    
    if (name === 'matheus') {
        resolve('o usuario foi encontrado')
    }else{
        reject('o usuario não foi encontrado')
    }
})
    
    
    
myPromise2.then((data) => {

    console.log(data)

}).catch((err) => {

console.log('erro no sistema: ' + err )

})

// resolver varias promessas com all

const p1 = new Promise((resolve, reject) => {
    resolve("p1 ok")
})

const p2 = new Promise((resolve, reject) => {
    resolve("p2 ok")
})

const p3 = new Promise((resolve, reject) => {
    resolve("p3 ok")
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

// usando setTimeout

const p5 = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("p5 ok")
    }, 2000)
})

const p6 = new Promise((resolve, reject) => {
    resolve("p6 ok")
})

const p7 = new Promise((resolve, reject) => {
    resolve("p7 ok")
})

const resolveAll2 = Promise.all([p5, p6, p7]).then((data) => {
    console.log(data)
})

console.log('depois do all')


// resolver varias promessas com race

const p10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p10 ok")
    }, 2000)
})

const p11 = new Promise((resolve, reject) => {
    resolve("p11 ok")
})

const p12 = new Promise((resolve, reject) => {
    resolve("p12 ok")
})

const resolveAllRace = Promise.race([p10, p11, p12]).then((data) => {
    console.log(data)
})

// Fetch API
// Fetch request na API do GitHub

const userName = 'fantaasyyy' 

fetch(`https://api.github.com/users/${userName}`, {
    metthod: 'GET',
    headers: {
        accept: 'application/vnd.github.v3+json'
    },
}).then((resposta) => {
    console.log(typeof resposta)
    console.log(resposta);
    return resposta.json();
})
.then((data) => {
    console.log(`o nome do usuario: ${data.name}`);
})
.catch((err) =>{
    console.log(`o nome do usuario: ${err}`)
})
