import { verificarLetra } from "./verificar.js"

function iniciarRodadas(jogadores, tema) {
    while (true) {
        for (const jogador of jogadores) {
            if (jogador.perdeu) return

            const letra = prompt(`Digite uma letra ${jogador.nome}: `).toLowerCase()
            const acertou = verificarLetra(letra, tema)

            if (acertou) {
                jogador.letrasCorretas.push(letra)
                console.log("Você acertou!")
            } else {
                jogador.letrasErradas.push(letra)
                jogador.vidas--

                if (jogador.vidas < 1) {
                    console.log(`${jogador.nome} perdeu!`)
                    jogador.perdeu = true
                    return
                }
                
                console.log(`Você errou! Você possui ${jogador.vidas} vidas!`)
            }

            jogador.suaVez = false
            jogadores.forEach(j => j.suaVez = !j.suaVez)
        }
    }
}

export { iniciarRodadas }
