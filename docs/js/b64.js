const final = document.getElementById("final")

function b64() { 
    let ttc = document.getElementById("toWrite").value;   
    let cripted = btoa(ttc);

    console.log(ttc)
    console.log(cripted)

    document.getElementById("final").value = cripted;
}

function db64 () {
    let ttu = document.getElementById("toWrite").value;
    let uncripted = atob(ttu)

    console.log(ttu)
    console.log(uncripted)


    document.getElementById("final").value = uncripted;
}