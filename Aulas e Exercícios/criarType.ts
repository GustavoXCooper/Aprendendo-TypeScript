// Usar quando precisar de uma variável que vai precisar ser string e number
type Idade = string | number;

let idade: Idade = 90;

function mostrarIdade(i: Idade){
    return i
}
// Usar em objetos
// em type:
/* type User = {
    nome: string,
    idade: number,
    ID: string
}
*/
// em interface:
/*
interface User {
    nome: string;
    idade: number;
    ID: string;
}*/

// A diferença entre type e interface é que a interface da pra mudar depois, ex:
interface User {
    nome: string;
    idade: number;
}
interface User {
    ID: string;
}
// Ela não excluí os itens anteriores, só adiciona novos
function resumo(usuario: User){
    return `Nome: ${usuario.nome},
    Idade: ${usuario.idade},
    ID: ${usuario.ID}`
}

resumo({
    nome: 'XXX',
    idade: 21,
    ID: '21231'
})