export default function personagem(jogador) {
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            document.querySelector(".bill1").classList.add("visible", jogador[i] === 3)
            document.querySelector(".bill2").classList.add("visible", jogador[i] === 3)
            document.querySelector(".bill3").classList.add("visible", jogador[i] === 3)
            document.querySelector(".bill4").classList.add("visible", jogador[i] === 4)
            document.querySelector(".bill5").classList.add("visible", jogador[i] === 5)
            document.querySelector(".bill6").classList.add("visible", jogador[i] === 6)
        }
        else {
            document.querySelector(".steve1").classList.add("visible", jogador[i] === 6)
            document.querySelector(".steve2").classList.add("visible", jogador[i] === 5)
            document.querySelector(".steve3").classList.add("visible", jogador[i] === 4)
            document.querySelector(".steve4").classList.add("visible", jogador[i] === 3)
            document.querySelector(".steve5").classList.add("visible", jogador[i] === 3)
            document.querySelector(".steve6").classList.add("visible", jogador[i] === 3)
        }
    }
}