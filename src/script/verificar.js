export default function verificar(letra, tema) {
    if (tema.includes(letra) && letra != "") {
        return true
    }
    
    else {
        return false
    }
}