
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

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

