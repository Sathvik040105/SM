
let inputButton = document.getElementById("input-button");
inputButton.addEventListener("click", run);

let restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", restart);

function run() {
    document.getElementById("encrypted").value = document.getElementById("input").value;
    //return key value as the sum of all ascii values of the input string
    let key = 0;
    for (let i = 0; i < document.getElementById("input").value.length; i++) {
        key += document.getElementById("input").value.charCodeAt(i);
    }
    document.getElementById("key").value = key;
}

function restart() {
    document.getElementById("input").value = "";
    document.getElementById("encrypted").value = "";
    document.getElementById("key").value = "";
}
