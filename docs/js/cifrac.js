function ccifra () {
    let alterador = document.getElementById("nModificador").value;
    let characteresG = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let characteresP = "abcdefghijklmnopqrstuvwxyz"
    let numbers = "0123456789"
    let text = document.getElementById("toWrite").value;
    let index = 0
    let posicaoLetra = (i)=> {
        if (i>=25) {
            i = i%26
        }
        return i    
    }
    let posicaoNum = (i)=>{
        if (i>=9) {
            i=i%10
        }
        return i    
    }   
    let submit = document.getElementById("toWrite")
    
    submit.addEventListener("click",ccifra)

    for (let i=0; i<text.length; i++) {
        if (characteresG.includes(text[i])) {
            index = characteresG.indexOf(text[i]);
            let x = posicaoLetra(index+alterador);
            text = text.replace(text[i],characteresG[x]);
        }
        else if (characteresP.includes(text[i])) {
            index = characteresP.indexOf(text[i]);
            let x = posicaoLetra(index+alterador);
            text = text.replace(text[i],characteresP[x]);
        }
        else if (numbers.includes(text[i])) {
            index = numbers.indexOf(text[i]);
            let x = posicaoNum(index+alterador);
            text = text.replace(text[i],numbers[x]);
        }
        else if (text[i]==" ") {
            continue
        }
        else {
            continue
        }
        console.log(i)
    }

    console.log(index)
    console.log(text)
    console.log(alterador)

    document.getElementById("final").value = text;
}