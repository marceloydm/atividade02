function ccifra () {
    let alterador = document.getElementById("nModificador").value;
    let characteresG = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let characteresP = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "01234567890"
    let text = document.getElementById("toWrite").value;
    let index = 0

    for (let i=0; i<text.length; i++) {
        if (characteresG.includes(text[i])) {
            index = characteresG.indexOf(text[i])
            var x = posicaoLetra(index+alterador)
            text = text.replace(text[i],characteresG[x])
        }
        else if (characteresP.includes(text[i])) {
            index = characteresP.indexOf(text[i])
            var x = posicaoLetra(index+alterador)
            text = text.replace(text[i],characteresP[x])
        }




    }




    console.log(x)
    console.log(index)
    console.log(text)
    console.log(alterador)
}
