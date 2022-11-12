/* function fazerRequisição(url: string, method: 'GET' | 'POST'){
    //...
}

let url = 'https://google.com.br';
let method = 'GET';

fazerRequisição(url, method);

//nada impede que a variável method seja alterada no futuro
*/

function fazerRequisição(url: string, method: 'GET' | 'POST'){
    //...
}

//type Methods = 'GET' | 'POST';
// let url = 'https://google.com.br';
// let method: Methods = 'GET';
// fazerRequisição(url, method);

// Usando um objeto:

type requestDetails = {
    url: string,
    method: 'GET' | 'POST'

}
let req = {
    url: 'https://google.com.br',
    method: 'GET'
}


