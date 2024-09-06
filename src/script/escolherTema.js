export default function escolherTema() {
    const palavras = ["microsoft", "apple", "computador", "software", "hardware", "algoritmo", "logica", "eniac", "etec", "steve jobs", "bill gates", "interface", "dos"]
    return palavras[Math.floor(Math.random() * palavras.length)]
}
