
function resumo(
    usuario: {nome: string, idade?: number}){
    if ( usuario.idade !== undefined){
        return console.log(`Nome: ${usuario.nome},
        Idade: ${usuario.idade}`)
    } else {
        return console.log(`Nome: ${usuario.nome}`);
    }
}

let u = {
    nome: 'Gustavo',
    idade: 21,
};

resumo(u);

