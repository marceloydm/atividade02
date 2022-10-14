function copy() {
let x = document.getElementById("final").value;
    navigator.clipboard.writeText(x);
    console.log("Copied Text: " + x);
    alert("Copied Text: " + x);
}
