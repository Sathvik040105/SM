
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

let linkedinsathvButton = document.getElementById("linkedin-button");
linkedinsathvButton.addEventListener("click", website);
  
let linkedinsaiButton = document.getElementById("linkedin-button1");
linkedinsaiButton.addEventListener("click", website1);

function website() {
    window.open(URL="https://www.linkedin.com/in/sathvik-manthri-365984259/");
}

function website1() {
    window.open(URL="https://www.linkedin.com/in/nagasai-jajapuram-1b8a73273/");
}

let gitsathvButton = document.getElementById("git-button");
gitsathvButton.addEventListener("click", website2);
  
let gitsaiButton = document.getElementById("git-button1");
gitsaiButton.addEventListener("click", website3);

function website2() {
    window.open(URL="https://github.com/Sathvik040105/");
}

function website3() {
    window.open(URL="https://github.com/Nagasai561/");
}