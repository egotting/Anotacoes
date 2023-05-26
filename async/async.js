// sintaxe
// function primeiraFuncao() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Esperou isso agui')
//             resolve()
//         }, 1000)
//     })
// }

// async function segundaFuncao() {
//     console.log('iniciou')

//     await primeiraFuncao()

//     console.log('terminou')
// }

// segundaFuncao()



function getUser(id){
    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err))
}



async function showUserName(id){
    try{
        const user = await getUser(id);

        console.log(`o nome do usuario é: ${user.data.first_name}`)
    }catch(err) {
        console.log.log(`erro: ${err}`)
    }

}

showUserName(3)