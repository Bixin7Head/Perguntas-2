const nomes = ["Thiago", "Guilherme", "Davi", "Gabriel", "Kaua", "Daniel", "Vitor"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)