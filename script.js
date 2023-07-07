
let inputButton = document.getElementById("input-button");
inputButton.addEventListener("click", run);

let restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", restart);

let inputButton2 = document.getElementById("input-button2");
inputButton2.addEventListener("click", run2);

let restartButton2 = document.getElementById("restart-button2");
restartButton2.addEventListener("click", restart2);


function run() {
    let input = document.getElementById("input").value;
    
    let prod = 0;
    for (let i = 0; i < input.length; i++) {
        prod += input.charCodeAt(i);
    }

    const charac = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_+=-[];,./<>?:"{}\|';
    let key1 = "";
    for (let i = 0; i < (Math.min(input.length,charac.length)); i++) {
        key1 += charac.charAt(Math.floor(Math.random()*(charac.length)));
    }

    // Generating a pseudo-random key stream of the same length as the input using the RC4 algorithm
    let key = Math.floor(Math.random() * input.length * prod);
    let keystr = key.toString();

    function randomCombineStrings(string1, string2) {
        // Combine the characters of both strings
        let combinedString = string1 + string2;
        
        // Convert the combined string into an array of characters
        let characters = combinedString.split("");
        
        // Shuffle the characters randomly using Fisher-Yates algorithm
        for (let i=0;i < characters.length; i++) {
          let j = Math.floor(Math.random() * (i + 1));
          [characters[i], characters[j]] = [characters[j], characters[i]];
        }
        
        // Join the shuffled characters back into a string
        let shuffledString = characters.join("");
        
        return shuffledString;
      }

    let finalkey = randomCombineStrings(key1, keystr);
    document.getElementById("key").value = finalkey;
    
    // Encrypting the input using the XOR operation
    let encrypted = "";
    for (let i = 0; i < input.length; i++) {
        encrypted += String.fromCharCode(input.charCodeAt(i) ^ finalkey.charCodeAt(i));
    }
    
    document.getElementById("encrypted").value = encrypted;
}


function run2() {
    let input2 = document.getElementById("input2").value;
    let key2 = document.getElementById("&key").value;
    // Decrypting the input2 text using the XOR operation
    let decrypted = "";
    for (let i = 0; i < input2.length; i++) {
        decrypted += String.fromCharCode(input2.charCodeAt(i) ^ key2.charCodeAt(i));
    }
    
    document.getElementById("decrypted").value = decrypted;
}




function restart() {
    document.getElementById("input").value = "";
    document.getElementById("encrypted").value = "";
    document.getElementById("key").value = "";
}

function restart2() {
    document.getElementById("input2").value = "";
    document.getElementById("&key").value = "";
    document.getElementById("decrypted").value = "";
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
