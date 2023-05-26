// Exercicio numero 1

//1. Declare uma variavel de nome  weight
// var weight

//2. que tipo de dado e a variavel acima
// console.log(typeof weight)


/*
    3. declare uma variavel e atribua valores para 
    cada um dos dados:
        * name: String
        * age: Number (intenger)
        * stars: Number (float)
        * isSubscribed: Boolean

*/

/*let name = 'gabi'
let age = 16
let stars = 2.4
isSubscribed = false
/*


/*
    4. a variavel student abaixo é de que tipo de  dados?

    4.1 atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atençao, substitua <name> <age> e <weigth> 
        pelos valores de cada prorpeidade do objeto.

*/

// let student = {
//     name: 'gabi',
//     age: 16,
//     stars: 2.4,
//     isSubscribed: false
// };

// console.log(`${student.name} de idade ${student.age} pesa ${student.stars} kg.`)



/*
    5. Declare uma variavel do tipo Array, de nome students e atribua
    a ela nenhum valor, ou seja, somente Array vazio
*/

// let sexo =  [];

/*
    6. Reatribua valor para a variavel acima, colocando dentro
    dela o objeto student da questao 4. (nao copiar e colar o objeto,
    mas usar o objeto criado e inserir ele no array)
*/
    
//  let students = [
//      student
// ];




/*
    7. Coloque no console o valor da posicao zero do Array acima

*/

// console.log(students[0])


/*
    8. Crie um novo student e coloque na posicao 1 do array students

*/

// const gaby = {
//     name: "Gaby",
//     age: 16,
//     weight: 54.7,
//     isSubscribed: true 
// }

// students[1] = gaby
// console.log(gaby)

/*
    9. Sem rodar o codigo responda qual e a respota do codigo abaixo e porque? Apps sua resposta, rode o codigo e veja se vc acertou.


*/

// console.log(a)

// var a = 1


// function Person(name) {
//     this.name = name
//     this.walk = function() {
//         return this.name + " esta andando"
//     }

// };

// const henrico = new Person("henrico")
// const carlos = new Person("carlos")
// console.log(henrico.walk())
// console.log(carlos.walk())

// let pao = true
// let queijo = true

// const niceBreakFast = pao && queijo ? 'cafe top' : 'cafe ruim'


// console.log(niceBreakFast)

// let temperature = 36
// let highTemperature = temperature >= 37.5
// let mediumTemperature = temperature < 37.5 && temperature >= 37

// if(highTemperature) {
//     console.log('febre alta')
// } else if(mediumTemperature) {
//     console.log('febre moderada')
// } else {
//     console.log('saudavel')
// }

// let expression = '1'

// switch (expression) {
//     case 'a':
//         // codigo
//         console.log('a')
//         break
//     case 'b':
//         // codigo para expression b
//         console.log('b')
//         break
//     default:
//         console.log('default')
//         break
// }


// function calculate(number1, operator, number2) {
//     let result

    
//     switch (operator) {
//         case '+':
//             result = number1 + number2
//             break
//         case '-':
//             result = number1 - number2
//             break
//         case '*':
//             result = number1 * number2
//             break
//         case '/':
//             result = number1 / number2
//             break
//         default:
//             console.log('não implementado')
//             break
//     }
//     return result
// } 

// console.log(calculate(5, '+', 4))


// function sayMyName(name = '') {
//     if (name === '') {
//         throw new Error('Não tem nome')
//     }

//     console.log('depois do erro')
// }

// try {
//     sayMyName()

// } catch(e) {
//     console.log(e)
// }

// Dever 'Notas escolares'



// function getScore(score) {
//     let A = score >= 90
//     let B = score >= 80 && 89
//     let C = score >= 70 && 79
//     let D = score >= 60 && 69
//     let F = score >= 60 && 0


//     if(A) {
//         console.log('Nota A')
//     } else if(B){
//         console.log('Nota B')
//     } else if(C){
//         console.log('Nota C')
//     }
//     else if(D){
//         console.log('Nota D')
//     } else {
//         console.log('Reprovado')
//     }
// }


// getScore(100)
// getScore(80)
// getScore(70)
// getScore(60)
// getScore(0)


// let family = {
//     incomes: [1300, 400, 500],
//     expenses: [324, 532, 60, 6566]
// }

// function sum (array){
//     let total = 0

//     for(let value of array) {
//         total += value
//     }

//     return total
// }


// function calculateBelance (){
//     const calculateIncomes = sum(family.incomes)
//     const calculateExpenses = sum(family.expenses)

//     const total = calculateIncomes - calculateExpenses

//     const itsOk = total >= 0

//     let balanceText = 'negativo'

//     if (total >= 0) {
//         balanceText = 'positivo'
//     }
    
//     console.log(`seu saldo é  ${balanceText}: ${total.toFixed(2)}R$`)
// }

// calculateBelance()



// function transformDegree(degree) {
//     const celsiusExists = degree.toUpperCase().includes('C')
//     const fahrenheitExists = degree.toUpperCase().includes('F')

//     if(!celsiusExists && !fahrenheitExists) {
//         throw new Error('No temperature')
//     }
//     let updatedDegree = Number (degree.toUpperCase().replace("F", ""));
//     let formula = (fahrenheit) => (fahrenheit -35) * 5/9
//     let degreeSign = 'C'


//     if(celsiusExists) {
//         updatedDegree = Number (degree.toUpperCase().replace("C", ""));
//         formula = celsius => celsius + 9/5 + 32
//         degreeSign = 'F'
//     }






//     return formula(updatedDegree) + degreeSign 
 
// }

// try{
//     console.log(transformDegree('50F'))
//     // transformDegree('50Z')
// } catch(error) {
//     console.log(error.message)
// }



// const BooksByCategory = [
//     {
//         category: "Riquiza",
//         books: [ 
//             {
//                 title: "Harry Potter and the Sorcerer's Stone",
//                 author: "T. Marv Eker",
//             },
//             {
//                 title: "Harry Potter and the Chamber of Secrets",
//                 author: "J.K. Rowling",
//             },
//             {
//                 title: "Sexo e o caralho",
//                 author: "Cleiton",
//             },
            
//         ],
//     },
//     {
//         category: "inteligencia Emocional",
//         books: [
//             {
//                 title: "Mc pipokinha e a diva do pop",
//                 author: "pipoquetes",
//             },
//             {
//                 title: "Ansiedade e coisa de viado",
//                 author: "Henrico o arrombado",
//             },
//             {
//                 title: "Sexo e o caralho 2",
//                 author: "irmao do cleiton",
//             },
 
//         ],
//     }, 
// ];


// const totalLetras = BooksByCategory.length

// console.log(totalLetras)

// for(let category of BooksByCategory) {
//     console.log('total de livros da categoria: ', category.category)
//     console.log(category.books.length)
// }


// const headerID = document.querySelector('#header')

// consol.log(headerID.getAttribute('class'))

// header.removeAttribute('id')

// header.setAttribute('class', 'bg header')

// const input = document.querySelector('input');

// input.onkeypress = () => {
//     console.log('rodei')
// }

// const input = document.querySelector('input')

// input.onkeydown = (event) => {
//     console.log(event.currentTarget.value)
// }


// const button = document.getElementById("btn") 

// let age = window.prompt("ola mundo")

// age += 'SEXO SEXO'

// console.log('daipuginaipg', age ,'da-ojui0aua0b');



// let username= window.prompt('What`s your name?');
// console.log('username');

// document.getElementById('myText').onclick= () => {
//         username = document.getElementById('myText').value;

//         console.log(username);

//         document.getElementById('myLabel').innerHTML = "hello " + username;
// };



// document.getElementById('myButton');






// const { inherits } = require('util');
// const {eventEmitter} = require('events');

// function Character(name){
//     this.name = name;
// }

// inherits(Character, EventEmitter);

// const chapolin = new Character('chapolin');
// chapolin.on('help', () => console.log(`eu! o ${chapolin.name} colorado!`))

// console.log('oh! e agora, quem podera me defender?')
// chapolin.emit('help');






