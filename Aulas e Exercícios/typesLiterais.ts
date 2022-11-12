function mostrarTexto(
    texto: string,
    alinhamento: 'left' | 'right' | 'center'
){
    
}

mostrarTexto('texto', 'left')
mostrarTexto('texto', 'right')
// mostrarTexto('texto', 'azul')
// ^ vai dar erro

// outro exemplo:

type Opcoes = {
    width: number,
    height: number
}

function configurar(props: Opcoes | 'auto'){

}

configurar({width: 100, height: 200})
configurar('auto')
// configurar('outro')
