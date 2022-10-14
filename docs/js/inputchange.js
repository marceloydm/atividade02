function hide() {
    let hide = document.getElementById("nModificador");
    let hideb = document.getElementById("buttonsU");
    let show = document.getElementById("buttonsC");

    hide.style.visibility = "hidden";
    hideb.style.visibility = "hidden";
    show.style.visibility = "visible";
}
function show() {
    let show = document.getElementById("nModificador");
    let showb = document.getElementById("buttonsU");
    let hide = document.getElementById("buttonsC");

    show.style.visibility = "visible";
    showb.style.visibility = "visible";
    hide.style.visibility = "hidden";
}