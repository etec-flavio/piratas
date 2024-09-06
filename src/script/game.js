import escolherTema from "./escolherTema.js"
import { iniciarRodadas } from "./rodadas.js"
import { criarJogador } from "./jogador.js"

const tentativas = 6
const tema = escolherTema()
const jogador1 = criarJogador("Bill", tentativas, true)
const jogador2 = criarJogador("Steve", tentativas, false)

console.log(tema)
iniciarRodadas([jogador1, jogador2], tema)