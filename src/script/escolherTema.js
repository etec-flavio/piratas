export default function escolherTema() {
    const palavras = ["microsoft", "apple", "computador", "software", "hardware", "algoritmo", "logica", "eniac", "etec", "steve jobs", "bill gates", "interface", "dos"]
    const palavra = palavras[Math.floor( Math.random() * palavras.length )]

    return palavra
}