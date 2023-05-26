const pessoa = {
    nome: 'cleber',
    idade: '12'
};

//for in
for(let chave in pessoa){
    console.log(chave,pessoa.nome)
}

const cores = ['vermelho', 'amarelo', 'laranja']

for(let indice in cores){
    console.log(indice,cores[indice])
}

//for of

for(let cor of cores){
    console.log(cor)
}