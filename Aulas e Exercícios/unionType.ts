function mostrarIdade(idade: string | number){
    if(typeof idade === 'string'){
        console.log(idade.toUpperCase())
    } else {
        console.log(idade)
    }
}
// quando utilizar uma propriedade ou uma função que seja exclusiva a um dos tipos que estou executando,
// é necessário vereficar o tipo

mostrarIdade('21');
mostrarIdade(21);