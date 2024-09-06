function criarJogador(nome, vidas, suaVez) {
    return {
        nome,
        vidas,
        suaVez,
        perdeu: false,
        letrasCorretas: [],
        letrasErradas: [],
    }
}

export { criarJogador }
