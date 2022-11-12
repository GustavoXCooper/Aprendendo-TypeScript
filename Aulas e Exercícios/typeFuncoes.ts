type MathFunction = (n1: number, n2: number) => number
// toda função c/ o type MathFunction terá um parâmetro n1 e um parâmetro n2 que são numbers e o retorno que tb é number

const somar: MathFunction = (n1, n2) => {
    return n1 + n2;
}

const subtrair: MathFunction = (n1, n2) =>{
    return n1 - n2;
}

const multiplicar: MathFunction = (n1, n2) => {
    return n1 * n2;
}