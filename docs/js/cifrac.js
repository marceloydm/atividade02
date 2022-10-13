
let resultado - document.getElementById("final")
let letraMaiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let letraMinuscula = "abcdefghijklmnopqrstuvwxyz"
let numeros = "01234567890"
let alteador = 13
let indexTexto = 0
function cifra () {
    let texto = document.getElementById("toWrite").value;
    for (let i=0; i<texto.length; i++) {
        if (letraMaiuscula.includes(texto[i])){
            indexTexto = letraMaiuscula.indexOf(texto[i])
            var x = posicaoLetra(indexTexto+alterador)
            texto = texto.replace(texto[i],letraMaiuscula[x])
        }
        else if (letraMinuscula.includes(texto[i])){
            indexTexto = letraMinuscula.indexOf(texto[i])
            var x = posicaoLetra(indexTexto+alterador)
            texto = texto.replace(texto[i],letraMinuscula)
        }
        else if (numeros.includes(texto[i])){
            indexTexto = numeros.indexOf(texto[i])
            var x = posicaoNum(indexTexto+alterador)
            texto = texto.replace(texto[i],numeros[x])
        }
        else if (texto[i]==" ") {
            continue
        }
        else {
            continue
        }
    }
    resultado.textoContent = texto
}

var submit = document.getElementById("submit")
submit.addEventListener("click",cifra)

var posicaoLetra = (i)=> {
    if (i>=25) {
        i = i%26
    }
    return i
}

var altNum = (texto,letra,novaLetra)=>{
    texto.replace(letra,novaLetra)
}
var posicaoNum = (i)=> {
    if (i>=9) {
        i=i%10
    }
    return i
}






















// let caracteresEspeciais = "áÁàÀéÉèÈíÍìÌóÓòÒúÚùÙâÂêÊîÎôÔûÛãÃõÕýÝçÇ"
// "ABCDEFGHIJKLMNOPQRSTUVWXYZÇ".charCodeAt()
// "abcdefghijklmnopqrstuvwxyzç".charCodeAt()
// "0123456789".charCodeAt()
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzáÁàÀéÉèÈíÍìÌóÓòÒúÚùÙâÂêÊîÎôÔûÛãÃõÕýÝçÇ0123456789".charCodeAt()