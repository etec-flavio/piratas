import escolherTema from "./escolherTema.js"
import verificar from "./verificar.js"

function rodada() {
    while (true) {
        if (jogador[0].suaVez === true) {
            let letra = prompt(`Digite uma letra ${jogador[0].nome}: `).toLowerCase()
            let isTrue = verificar(letra, tema)
    
            if (isTrue === true) {
                letras_corretas.push(letra)
                console.log("Você acertou!")
            }
            else {
                letras_erradas.push(letra)
                jogador[0].vidas --

                if (jogador[0].vidas < 1) {
                    console.log("Você perdeu!")
                    jogador[0].perdeu = true
                    break
                }

                console.log(`Você errou! Você possui ${jogador[0].vidas} vidas!`)
            }

            
    
            jogador[0].suaVez = false
            jogador[1].suaVez = true
        }
    
        if (jogador[1].suaVez === true) {
            let letra = prompt(`Digite uma letra ${jogador[1].nome}: `).toLowerCase()
            let isTrue = verificar(letra, letra)
    
            if (isTrue === true) {
                letras_corretas.push(letra)
                console.log("Você acertou!")
            }
            else {
                letras_erradas.push(letra)
                jogador[1].vidas --

                if (jogador[1].vidas < 1) {
                    console.log("Você perdeu!")
                    jogador[1].perdeu = true
                    break
                }
                
                console.log(`Você errou! Você possui ${jogador[1].vidas} vidas!`)
            }
    
            jogador[1].suaVez = false
            jogador[0].suaVez = true
        }
    }
}

const tentativas = 6
const tema = escolherTema()
const jogador = [
    {
        nome: "Bill",
        perdeu: false,
        suaVez: true,
        vidas: tentativas,
    },
    {
        nome: "Steve",
        perdeu: false,
        suaVez: false,
        vidas: tentativas,
    }
]
var letras_corretas = []
var letras_erradas = []

console.log(tema)
rodada()