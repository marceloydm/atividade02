function copy() {
let x = document.getElementById("final").value;
    navigator.clipboard.writeText(x);

alert("Copied Text: " + x);}