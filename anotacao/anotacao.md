# A importancia da Sintaxe

* o'que e errar uma sintaxe

Ex:

Errado:
* consolelog("salve tropa") 

Certo:
* console.log("Salve tropa");
----------------------------------------------------------------

# Forma de "linka" o html com o javascript

* Comando para linka: <script src=""></script>

----------------------------------------------------------------



                    ~ Tipos de Dados ~



* String
    * cadeia de caracteres

        "" // aspas dupals
        '' // aspas simples
        `` // templates literals ou template string (essa unica que pode fazer multi linhas, ela pode ser quebrada sem quebrar o codigo.)

----------------------------------------------------------------

* Number

    33 // inteiros
    12.5 // reais - floot
    NaN // not a number
    infinity // infinito

----------------------------------------------------------------

* Bolean

    * somente 2 valores

        true or false

----------------------------------------------------------------

* Undefined vs null

    * nulo objeto que nao tem nada dentro dela diferente de indefinido

----------------------------------------------------------------

* Object

    * todo objecto ate na programacao tem peso e funcionalidade 

Ex:
console.log ( {
    nome: "carlo";  < --- isso e um objeto oq esta dentro de {}
})

----------------------------------------------------------------

* Arrays

    * uma lista
    * Agrupamento de dados

Ex:

console.log([
    'leite',
    'ovos',         oq esta dentro do [] e o Arrays
    2,
    3
])


                        ~ Variaveis ~

# Variaveis

* Nomes simbolicos para receber algum valor
* Atalhos de Codigo
* Identificadores
* 3 palavras reservadas para criar uma variavel
    * var
    * let
    * const

Ex: 
    //var e let 
    var clima = "Quente"
    clima = "frio"

    console.log(clima)  <-- sintaxe para chamar a sua variavel o clima

    //let
    
    let clima = "Quente"
    clima = "frio"

    console.log(clima)  <-- sintaxe para chamar a sua variavel o clima

    //const
    const clima = "Quente"
    clima = "frio"   <-- se fizer isso com const, vai dar erro,  const na vareia, e algo constante

    console.log(clima)  <-- vai dar erro por ter dois climas 

----------------------------------------------------------------

# Como declatar uma variavel
let clima

pronto foi declarada.

como ver o tipo da minha variavel

    * console.log(typeof (coloque a variavel))
----------------------------------------------------------------

# como ver o tipo da minha variavel

    * console.log(typeof (coloque a variavel))

----------------------------------------------------------------

# scope e var

    * Escopo determina a visibilidade de alguma variavel no JS.

# Block statement

// vamos iniciar um bloco.
{

    // aqui dentro e um bloco e posso colocar qualquer codigo.

} // aqui fechamos o bloco.

## var/hoisting

* var e global e podera funcionar fora de um escopo de bloco.

console.log('> existe x antes do bloco? ', x)

{
    var x = 0
}

console.log('> existe x antes do bloco? ', x)

// hoisting <-- pesquisa para vc entender o significado

----------------------------------------------------------------

## const/hoisting   

    * const e let sao locais e so funcionam no escopo aonde foi criado

console.log('> existe x antes do bloco? ', x) <--
                                                 |
{                                                | * Dessa forma o JS consegue ler diferentemente do var (mesma coisa para o const)
    var/const x = 0                              | * Lembrando o JS le os codigos de cima pra baixo. 
                              <------------------ 
}
console.log('> existe x antes do bloco? ', x) ( esse codigo n vai funcionar pelo simples motivo, ele n esta no escopo aonde esta var/const)

obs: let vc ainda consegue colocar ela fora do scopo pra chamar algo mencionado em outro escopo, mas, const nao, const so funciona dentro do seu escopo.

----------------------------------------------------------------

## Para criar nomes

    * JS e case-sensitive ( sensivel ao caso)
    * JS aceita a cadeia de caracteres Unicode

 - Posso:
    * Iniciar com esses caracteres especiais: $ _
    * Iniciar com letras
    * Colocar acentos
    * Letras maiusculas e minusculas fazem diferenca

 - Nao posso:
    * Iniciar com numeros
    * Colocar espaco vazios nome

 - Ideal:
    * Criar nomes que fazem sentido
    * Que explique oq a variavel e ou faz
    * camelCase
    * sanke_case
    * Escrever em ingles
----------------------------------------------------------------

## concatenando e interpolando variaveis

        let age, isHuman    
        
        age = 15        
        isHuman = true

        ## concatenando os valores
        console.log(`o ` + name + `tem ` + age ` anos. ` );
--
        ## interpolando valores com template literals or template string 

        console.log(`o ${name}  tem  ${age}  anos. ` );

----------------------------------------------------------------

## Object

ex : 

    const person = {
        name: gabi,
        age: 16,
        nationelaty: brazil,
        fav food: strognoff
    }

console.log(`${person.name} tem ${person.age} anos. `)

----------------------------------------------------------------

## Arrays

const animals = [ 
    'lion',   --> 0
    'mokey',  --> 1
    'cat'     --> 2 
]

console.log(animals[0]) vc tem que chamar pela posiçao do array

console.log(animals.length) para saber as posiçoes

----------------------------------------------------------------

                            ~ Functions ~

Ex:

    function createPhrases() {
        
    }

----------------------------------------------------------------

## function expression
## function anonymous

//parametros (parameters)

ex 1:
 const sun = function(number1, number2) {
    console.log(number1 + number2)
 }

 sun(2,3) arguments - argumentos
------------------------------------------
 ex 2:
 const sun = function(number1, number2) {
    total = number1 + number2
    return total
 }

 let number1 = 34
 let number2 = 25

 console.log(`o numero 1 é ${number1}`)
 console.log(`o numero 2 é ${number2}`)
 console.log(`A soma é ${sum{number1, number2}}`)

 ----------------------------------------------------------------

 ## function scope



 let object = `create video`

 function createThink(object) <-- se n tiver nada nesse "object" ele vai procurar em outro scopo um object 
 {
    object = study  <-- esse object foi trocado pro nome study, ent toda vez q chamar ele no console.log vai ser chamado de study
    return object
 }
 
console.log(object)
console.log(createThink(object))

----------------------------------------------------------------

## function hoisting

sayMyName();

function sayMyName(){
    console.log(`penes`) <-- sofre a mesma elevação da linha `163`
};

sayMyName();

const sayMyName = function(){
    console.log(`penes`) <-- quando a variavel n vai sofrer elevacao pq "sayMyName" n e uma function
};

----------------------------------------------------------------

## arrow function

const sayMyName = function(name)  {             <-- Ou assim
    console.log(name)                        
}                                           
                                            (e geralmente e ultilizado com const)
sayMyName(`henrico`)
-------------------------
const sayMyName = (name) => {             <-- Ou assim   
    console.log(name)                        
}

sayMyName(`henrico`)

----------------------------------------------------------------

## callback function

function sayMyName(name) {
    console.log(`antes de executar a funcao callback`)

    name()      <-- chamando ele de volta pro scopo significado de "callback">

    console.log(`depois de executar a callback`)
}

sayMyName(
    () => {
        console.log(`estou em uma callback`)        <-- pode passar qualquer tipo de função. isso e callback.
    }
)  

----------------------------------------------------------------

## Function() constructor

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + "andando"
    }

};

const henrico = new Person("henrico")
const carlos = new Person("carlos")
console.log(henrico.walk())
console.log(carlos.walk())

----------------------------------------------------------------

## Prototype

    * prototype-based language
    * prototype chain
    * __proto__

    colocando qualquer tipo de funcao seja string ou boleon  e o colocar . dps que vai ter para estudar

----------------------------------------------------------------

## Type conversion (typecasting) vs type coersion

    * Alteracao de um tipo de dado para outro tipo


Type coersion: console.log('9' + 5); 

Type conversion: console.log(Number('9') + 5); <-- converteu o nove para um Number 

----------------------------------------------------------------

## Manipulando Strings e Numbers

# transformando string em number e number em string

let string = "123"
console.log(Number(string))

let number = 321
console.log(String(Number))

# contar quantos caracteres tem um palavra e quantos digitos tem um numero

let word = "Paralelepipedo"
console.log(word.length)
let number = 1234
console.log(String(number).length)

# Transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula

let number = 4213124214.314123412
console.log(number.toFixed(2).replace(".", ","))

# Transforma letras minusculas em maiusculas. faça o contrario disso tambem

let word = "penes duro"
console.log(word.toUpperCase())
console.log(word.toUpperCase().toLowerCase) <-- pode colocar os dois juntos

# Separando textos com espacos do array

let phrase = "penes duro e mt penes durao"

let myArray = phrase.split(" ")

# depois transforme o array em texto e onde eram espaços, coloque _

let phraseWithUnderscore = myArray.join("_") <-- esse myArray e o msm la de cima
console.log(phraseWithUnderscore)

# verificar se o texto contem uma palavra especifica

let phrase = "eu quero penes"
console.log(phrase.include("penes"))

# Crirar array com contrucotr

let myArray = new Array ('a', 'b', 'c')
console.log(myArray)

# contar elementos de um array

console.log(["a", "b", "c"].lenght)

# Transformar uma cadeia de caracteres em elementos de um array

let word = "manipulacao"
console.log(Array.from(word))

----

let techs = ["html", "css", "js" ]

# adicionar um item no final do array
techs.push("react")
# adicionar no começo 
techs.unshift("sql")
# remover do fim
techs.pop()
# remover do começo
techs.shift()
# pegar somente alguns elementos do array
techs.slice(1, 3)
# remover 1 ou mais items em qualquer posiçao do array
techs.splice(1, 2) <-- tiro o css e o js, pq conta 0, 1, 2
# encontrar a posiçao de um elemento do array
let index = techs.indexOf('css')
techs.splice(index, 1) <-- para remover


console.log(techs)

----------------------------------------------------------------
                    
                    ~ Expressoes e Operadores ~

* Expressions
- Operators
    Binary
    Unary
    Ternary


Ex:

let number = 1

console.log("number + 1") e um binario

console.log("++number") ou console.log("--number") e um unario

console.log("typeof number") e um unario

console.log(false ? 'alo' : 'nada')

----------------------------------------------------------------

## New

* left-hand-side expression
* criar um novo objeto

let name = new String ('henrico')
name.surName = "capeta" ( ele adiciona um novo objeto)
let age - new Number (17)
console.log(name.surName, age)

ex2:

let date = new Date ('2021-12-21')
console.log(Date)

----------------------------------------------------------------

## Operadores Unarios

* typeof serve pra ver se e string, number, bolean
* delete apaga como no exemplo a baixo



const person = {
    name: 'henrico',
    age: 25
}

delete person.age  ( se colocar esse codigo no js e ir no console do navegador vc vai ver q o age foi apagado)

----------------------------------------------------------------

## Operadores aritiméticos

* multiplicação
console.log(3.21 * 5)

* divisão
console.log(12 / 12)

* soma
comsole.log(34 + 32)

* subtração
console.log(23 - 23)

* resto da divisão
let remainder
remainder = 11 % 11
console.log(remainder)

* incremento
let inrement = 0
increment++
console.log(increment) 

* decremento
let decrement = 0
console.log(--decrement)

* exponencial
console.log(3 ** 3)

----------------------------------------------------------------

## Grouping operator 

let total = 3 + 5 * 3
console.log(total)

let total = (3 + 5) * 3 (coloca no js que vc vai entender )
console.log(total)

----------------------------------------------------------------

## Operadores de comparação

* Irá comprar valores e  retornar um boolean como resposta a comparação

let one = 1 
let two = 2

* ==    igual a 
console.log(two == 1)
console.log(one == "1")

* !=    direfente de
console.log(two != 1)
console.log(two != 1)
console.log(two != "2")

* ===   estritamente igual a

console.log( one === 1)
console.log( one === "1")

* !==   estritamente diferente de

console.log( one !== 1)
console.log( one !== "1")

* >        Maior que 
console.log(one > two)

* >=       Maior igual a

console.log(one >= 1)
console.log(two >= 1)

* <        Menor que

console.log( one < two)

* <=       Menor igual a

console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

----------------------------------------------------------------

## Operadores de atribuição (Assignment)

let x

console.log(x)

* assignment
    x = 1

* addition assignment
    x += 2

* subtraction assignment
    x -= 1

* multiplcation assignment
    x *= 2

* division assignment
    x /= 2

----------------------------------------------------------------

## Operadores lógicos (logical operators)

* - 2 valores booleanos, quando verificados,
    resultara em verdadeiros ou falso


let pao = true
let queijo = true

* AND &&
cosnole.log(pao && queijo)


* OR ||

console.log( pao || queijo)

( NOT !)

console.log(!pao) ele troca o operador se e falso vira verdadeiro e se for verdadeiro vira falso

----------------------------------------------------------------

## Operadores condicional (Ternario)

* Dependendo da condição, nós receberemos valores diferentes

    condiçao entao valor 1 se nao valor 2
    condition ? value1 : value2

ex:

let pao = true
let queijo = true

const niceBreakFast = pao && queijo ? 'cafe top' : 'cafe ruim'


console.log(niceBreakFast)

----------------------------------------------------------------

## Operador de String (String operator)

* comparison ( comparacao)
    console.log('a' == 'b')


* concatenation ( concatenacao)
    retorna a unicao de duas Strings    

let aplha = 'alpha'

console.log( alpha + 'bet' + 's')

----------------------------------------------------------------

## falsy e truthy

* falsy {
 quando u mvalor e consdierado false em contextos onde um booleano e obrigatorio ( condicionais e loops)

false
0
-0
""
null
undefined
NaN

}

console.log( (usando todas as opções acima) ? 'verdadeiro' : 'falso')

* truthy {
    Qundo um valor e considerado true em contextos onde um booleano e obrigatorio ( condicionais e loops)

true
{}
[]
1
3.23
"0"
"false"
-1
Inifinity
-Infinity

}

console.log( (usando todas as opções acima) ? 'verdadeiro' : 'falso')

----------------------------------------------------------------

## Operator precedence

     precedencia de operadores

* grouping                  ()
* negação e incremento      ! ++ --
* multiplicação e divisão   * /
* adição e subtração        + -
* relacional                < <=
* igauldade                 == != === !===
* AND                       &&
* OR                        ||
* condicional               ? : 
* assigment (atribuicao)    = ++ -= *=

----------------------------------------------------------------
                    ~ Control flow ~


## if and else

ex:

let temperature = 37.5


if(temperature >= 37) {
    console.log('febre')
} else {
    console.log('saudavel')
}

* ---------------------------------------

## tambem pode ultilizar para adicionar mais

if(highTemperature) {
    console.log('febre alta')
} else if() {
    console.log('febre moderada')
} else {
    console.log('saudavel')
}

* -----------------------------------

## Forma mais organizada

let temperature = 36
let highTemperature = temperature >= 37
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('febre alta')
} else if(mediumTemperature) {
    console.log('febre moderada')
} else {
    console.log('saudavel')
}

----------------------------------------------------------------

## switch
let expression = 'a'

switch (expression) {
    case 'a':
        // codigo
        console.log('a')
        break
    case 'b':
        // codigo para expression b
        break
    default:
        console.log('default')
        break
}

porque tem que ter o break?
 Se n tiver o break o js vai caçar ele na proxima linha comando e se n tiver ele vai procurando e ele n vai focar em uma linha so, coloca essa linha de comando no js e vai tirando o break que vc vai entender melhor

# calculadora simples com switch

function calculate(number1, operator, number2) {
    let result

    
    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado)
            break
    }
    return result
} 

console.log(calculate(4, '-', 5))


----------------------------------------------------------------

## throw and try/catch

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Não tem nome')
    }

    console.log('depois do erro')
}

try {
    sayMyName()

} catch(e) {
    console.log(e)
}

----------------------------------------------------------------
                        ~Estrutura de repetição~


## for

for(let i = 0; i < 10; i 1++) {
    console.log(i)
}


for(let i = 0; i < 10; i 1++) {
    if (1 === 5) {
        break;                          <-- para parar
    }
    console.log(i)
}


for(let i = 10; i > 0; i 1--) {
    if (1 === 5) {
        continue;                          <-- pula a execucao do momento
    }
    console.log(i)
}

----------------------------------------------------------------

## while


let i = 0;
while(i < 10) {
    console.log(i)
                            <-- e bom usar quando a gente n sabe quando a aplicacao vai terminar por isso e bom colocar i /= 35 q ai a aplicacao vai dividir por 35 ate quase passar de 10
    i++;
}

----------------------------------------------------------------
## for of

let name = 'henrico'
let names = ['sexo', 'safado', 'otario']

for(let char of name) {
    console.log(char)
}

----------------------------------------------------------------
## for in


let person = { 
    name: 'sexo',
    age: 32,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
}

for(let property in person) {
    console.log(person[property]) <-- pega de uma forma mais detalhada 
}


----------------------------------------------------------------

                           ~DOM~


* DOM é apenas o html junto com o js

* codigos uteis

const element = document.getElementsById('')        <-- serve pra pegar o id de um elemento html
## getElementsById (elemtn)

const element = document.getElementsByClassName('')      <-- mesma coisa so que com class em vez de id
## getElementByClassName (HTMLCollection)

const element = document.getElementsByTagName('') 
## getElementByTagName (HTMLCollection)

const element = document.querySelector('')
## querySelector (element)

const element = document.querySelectorAll('')
## querySelectorAll (Nodelist)


----------------------------------------------------------------

## Manipular conteudo com textContent

const element = document.querySelector('h1')

element.textContent = "gozei" <-- para substituir

ou

element.textContent += "gozei" <-- para adicionar

console.log()


--------------------------

## innerText

const element = document.querySelector('h1')

element.innerText = (qualquer coisa)

--------------------------

## innerHTML

const element = document.querySelector('h1')
element.innerHTML = " sexo 2 <h1> outra coisa</h1>"


--------------------------

## value

const element = document.querySelector('h1')
element.Value = 'valor que eu quiser'

--------------------------

## setAttribute (vai colocar um novo id ou class)

const element = document.querySelector('header')
element.setAttribute('id', 'header')

const headerID = document.querySelector('header') < -- pegando o id criado a cima

console.log(headerID)

--------------------------
## altrando estilos com style


const element = document.querySelector('body')

element.style.backgroundColor = '#f2c3f3'
console.log(element.style.backgroundColor)

--------------------------

## como alturar estilos com o class list

const element = document.querySelector('body')

element.classList.add()
element.classList.remove()
element.classList.toggle() <-- se existir ele remove se n existir ele adiciona

console.log(element.classList)

----------------------------------------------------------------

# navegando pelos elementos

* parentNode parentElement

const body = document.querySelector ('body')

console.log(body.parentNode)
console.log(element.parentElement)

--------------------------

## pegando os elementos filhos

const body = document.querySelector ('body')

//childNodes children
console.log(el.childNodes)
console.log(el.children)


// firstChild firstElementChild
console.log(el.firstChild)
console.log(el.firstElementChild)



//lastChild lastElementChild
console.log(el.lastChild)
console.log(el.lastElementChild)

--------------------------

## navegar pelos irmaos

const el = document.querySelector('body')

//nextSibling nextElementSibling
console.log(el.nextSibling)
console.log(el.nextElementSibling)


// previousSibling  previousElementSibling
console.log(el.previousSibling)
console.log(el.previousElementSibling)

--------------------------

## createElement

const div = document.createElement('div');
div.innerHTML = "ola devs"

--------------------------

## oppend prepend

const div = document.querySeelctor('body');

body.append(div)
ou
body.prepend(div)

--------------------------

## insertBefore

const div = document.querySelector('body')
const script = document.querySelector('script')
body.insertBefore(div, script)

ou

const div = document.querySelector('body')
const header = document.querySelector('header') seria como after
body.insertBefore(div, header.nextElementSibling)

----------------------------------------------------------------

# Adicionando eventos via html

eventos do mouse 

va no seu html <h1 on></h1> so coloque on que vai aparece muitas opçoes para vc escolher nessa açoes

const input = document.querySelector('input');

input.onkeypress = () => {                  uma delas para teclado
    console.log('rodei')
}

--------------------------

## eventos pelo js

const h1 = document.querySelector('h1')

h1.addEventListener('', print)          < -- com esse comando

function print() {
    console.log('print')
};

----------------------------------------------------------------

                            NODE

## for of e in



