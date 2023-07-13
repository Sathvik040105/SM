
let inputButton = document.getElementById("input-button");
inputButton.addEventListener("click", run);

let restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", restart);

let inputButton2 = document.getElementById("input-button2");
inputButton2.addEventListener("click", run2);

let restartButton2 = document.getElementById("restart-button2");
restartButton2.addEventListener("click", restart2);

let inputButton3 = document.getElementById("input-button3");
inputButton3.addEventListener("click", run3);

let restartButton3 = document.getElementById("restart-button3");
restartButton3.addEventListener("click", restart3);

let inputButton4 = document.getElementById("input-button4");
inputButton4.addEventListener("click", run4);

let restartButton4 = document.getElementById("restart-button4");
restartButton4.addEventListener("click", restart4);

/*function padding(str) {
    let n = 7 - str.length;
    for (let i = 0; i < n; i++) {
        str = "0" + str;
    }
    return str;
}*/



/*function run() {
    let input = document.getElementById("input").value;
    
    let prod = 0;
    for (let i = 0; i < input.length; i++) {
        prod += input.charCodeAt(i);
    }

    const charac = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ~`!@#$%^&*()_+=-[];,./<>?:"{}\|';

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
    
    document.getElementById("encrypted").value = encrypted;*/
    /*let encrypted = "";
    let key = "";
    for (let i = 0; i < input.length; i++) {
        limit = Math.floor(Math.random() * input.length)+128;
        keynum = Math.floor(Math.random() * limit)%128;
        /*if (((input.charCodeAt(i)).toString(2)).length >= (keynum.toString(2)).length) {
            crtbinkeynum = padding(keynum.toString(2),((input.charCodeAt(i)).toString(2)).length)
            encrypted += String.fromCharCode(parseInt((input.charCodeAt(i)).toString(2),2) ^ parseInt(crtbinkeynum,2));
            key += String.fromCharCode(parseInt(crtbinkeynum,2));   
        }
        else {
            crtbininput = padding((input.charCodeAt(i)).toString(2),(keynum.toString(2)).length)
            encrypted += String.fromCharCode(parseInt(crtbininput,2) ^ parseInt(keynum.toString(2),2));
            key += String.fromCharCode(keynum);
        }
        //inputbin = (input.charCodeAt(i)).toString(2);
    }
    encryprev = "";
    for (let i = encrypted.length-1; i >= 0; i--) {
        encryprev += encrypted.charAt(i);
    }
    document.getElementById("encrypted").value = encrypted+encryprev;
    document.getElementById("key").value = key;

}



function run2() {
    let input2 = document.getElementById("input2").value;
    let key2 = document.getElementById("&key").value;
    // Decrypting the input2 text using the XOR operation
    let decrypted = "";
    for (let i = 0; i < (input2.length)/2; i++) {
        decrypted += String.fromCharCode(input2.charCodeAt(i)^key2.charCodeAt(i));//(parseInt((input2.charCodeAt(i)).toString(2),2) ^ parseInt((key2.charCodeAt(i)).toString(2),2));
    }
    
    document.getElementById("decrypted").value = decrypted;
}
*/
/*
function run(){
    let input = document.getElementById("input").value;
    let encrypted = ""; 
    let key = "";
    for(let i = 0; i<input.length; i++){
        //limit = Math.floor(Math.random() * input.length*128)+128;
        keynum = Math.floor(Math.random() * 1000)%128;
        encrypted += String.fromCharCode(keynum^(input.charCodeAt(i)));
        key += String.fromCharCode(keynum);
    }
        document.getElementById("encrypted").value = encrypted//+encryprev;
        document.getElementById("key").value = key;
    
    
}
    
    
    
function run2() {
    let input2 = document.getElementById("input2").value;
    let key2 = document.getElementById("&key").value;
        // Decrypting the input2 text using the XOR operation
    let decrypted = "";
    for (let i = 0; i < (input2.length); i++) {
        decrypted += String.fromCharCode(input2.charCodeAt(i)^key2.charCodeAt(i));//(parseInt((input2.charCodeAt(i)).toString(2),2) ^ parseInt((key2.charCodeAt(i)).toString(2),2));
    }    
    document.getElementById("decrypted").value = decrypted;
}*/
/*
function padding(input,len){
    n = len-input.length;
    for(let i = 0; i<n; i++){
        input = "0" + input;
    }
    return input;
}

function run() {
    let input = document.getElementById("input").value;
    let inputbin = "";
    let keyfinal = ""
    for(let i = 0; i<input.length; i++){
        let key = Math.floor(Math.random() * 1000)%128;
        inputbin += padding((input.charCodeAt(i)^key).toString(2),7);
        keyfinal += String.fromCharCode(key);
    }
    let encrypted = "";
    for(let i = 0; i<inputbin.length/7; i++){
        encrypted += String.fromCharCode(parseInt(inputbin.substring(i*7,7*i+7),2));
    }
    document.getElementById("encrypted").value = encrypted;
    document.getElementById("key").value = keyfinal;
}

function run2() {
    let input2 = document.getElementById("input2").value;
    let key2 = document.getElementById("&key").value;
    let decrypted = "";
    let outputbin = "";
    let key2bin = "";
    for(let i = 0; i<input2.length; i++){
        outputbin += padding((input2.charCodeAt(i)).toString(2),7);
        key2bin += padding((key2.charCodeAt(i)).toString(2),7);
    }
    for(let i = 0; i<outputbin.length/7; i++){
        decrypted += String.fromCharCode(parseInt(outputbin.substring(i*7,7*i+7),2)^parseInt(key2bin.substring(i*7,7*i+7),2));
    }
    document.getElementById("decrypted").value = decrypted;
}
*/

/*function run() {
    let input = document.getElementById("input").value;
    let inputbin = "";
    let keyfinal = "";
    let keybin = "";
    for (let i = 0; i < input.length; i++) {
      let key = Math.floor(Math.random() * (126-33)+33); // Removed the modulo operation
      keybin += padding(key.toString(2), 7);
      inputbin += padding(input.charCodeAt(i).toString(2), 7);
      keyfinal += String.fromCharCode(key);
    }
    let encrypted = "";
    for (let i = 0; i < inputbin.length / 7; i++) {
        encrypted += String.fromCharCode(parseInt(inputbin.substring(i * 7, i * 7 + 7), 2) ^ parseInt(keybin.substring(i * 7, i * 7 + 7), 2));
    }
    document.getElementById("encrypted").value = encrypted;
    document.getElementById("key").value = keyfinal;
  }
  
  function run2() {
    let input2 = document.getElementById("input2").value;
    let key2 = document.getElementById("key").value;
    let decrypted = "";
    let outputbin = "";
    let key2bin = "";
    for (let i = 0; i < input2.length; i++) {
      outputbin += padding(input2.charCodeAt(i).toString(2), 7);
      key2bin += padding(key2.charCodeAt(i).toString(2), 7);
    }
    for (let i = 0; i < outputbin.length / 7; i++) {
      decrypted += String.fromCharCode(
        parseInt(outputbin.substring(i * 7, i * 7 + 7), 2) ^
          parseInt(key2bin.substring(i * 7, i * 7 + 7), 2)
      );
    }
    document.getElementById("decrypted").value = decrypted;
  }
  
  function padding(str, len) {
    while (str.length < len) {
      str = "0" + str;
    }
    return str;
  }*/

  /*function padding(input){
    n = 7-input.length;
    for(let i = 0; i<n; i++){
        input = "0" + input;
    }
    return input;
}

function run(){
    let input = document.getElementById("input").value;
    let key = "";
    let encrypted1 = "";
    let encrypted2 = "";
    let binresult = "";
    for(let i = 0; i<input.length; i++){
        let keynum = 0;
        let initkeynum = Math.floor(Math.random() * (126-33) + 33);
        if(32<initkeynum<128){
            keynum += initkeynum;
        }
        binresult += padding((input.charCodeAt(i)^keynum).toString(2));
        key += String.fromCharCode(keynum);
    }
    for(let i = 0;i<binresult.length;i+=7){
        if(parseInt(binresult.substring(i,i+7),2)>32){
            encrypted1 += String.fromCharCode(parseInt(binresult.substring(i,i+7),2));}
        else{
            encrypted2 += String.fromCharCode(parseInt(binresult.substring(i,i+7),2)+33);
        }
    }
    r = (encrypted2.length).toString();
    document.getElementById("encrypted").value = encrypted2+encrypted1;
    document.getElementById("key").value = r+"@"+key;

}*/

/*function padding(input,l){
    let n = l - input.length;
    for(let i=0;i<n;i++){
        input = "0"+input;
    }
    return input;
}

function run(){
    let input = document.getElementById("input").value;
    let keybin = "";
    let encrypted = "";
    let encryptbin = "";
    let inputbin = "";
    var add = 33;
    for(let i = 0; i < input.length; i++){
        let keynum = Math.floor(Math.random()*(126-33)+33);
        keybin += padding(keynum.toString(2),8);
    }
    for(let i = 0; i < input.length; i++){
        inputbin += padding((input.charCodeAt(i)).toString(2),8);
    }
    for(let i = 0; i < inputbin.length; i++){
        encryptbin += (inputbin[i] ^ keybin[i]);
        encryptbin += add.toString(2);
    }
    for(let i = 0; i < encryptbin.length; i+=8){
        encrypted += String.fromCharCode(parseInt(encryptbin.substring(i,8),2));
    }
    let finalkey = "";
    for(let i = 0; i < keybin.length; i+=8){
        finalkey += String.fromCharCode(parseInt(keybin.substring(i,8),2));
    }
    document.getElementById("encrypted").value = encrypted;
    document.getElementById("key").value = finalkey;

}*/

function padding(input, l) {
    let n = l - input.length;
    for (let i = 0; i < n; i++) {
      input = "0" + input;
    }
    return input;
  }
  
function generateKey(length) {
    let key = "";
    for (let i = 0; i < length; i++) {
      let keynum = Math.floor(Math.random() * (126 - 33 + 1)) + 33; // Generate random ASCII value in the range 33 to 126
      key += padding(keynum.toString(2),8);
    }
    return key;
  }
  
function run() {
    let input = document.getElementById("input").value;
    let keybin = "";
    let encrypted = "";
    let encryptbin = "";
    var add = 33;
    
    // Generate the key
    keybin = generateKey(input.length);
  
    let inputbin = "";
    for (let i = 0; i < input.length; i++) {
      inputbin += padding((input.charCodeAt(i)).toString(2), 8);
    }
    if(inputbin.length != keybin.length){
        document.getElementById("encrypted").value = "Error!";
        document.getElementById("key").value = "Error!";
    }
  
    for (let i = 0; i < inputbin.length; i = i+8) {
      let encryp = (parseInt(inputbin.substring(i, i + 8), 2) ^ parseInt(keybin.substring(i, i + 8), 2));
      encryptbin += padding((parseInt(padding(encryp.toString(2),8),2)+parseInt(padding(add.toString(2),8),2)).toString(2),8);
    }

    if(encryptbin.length != keybin.length && encryptbin.length != inputbin.length){
        document.getElementById("encrypted").value = "Error!";
        document.getElementById("key").value = "Error!";
    }
  
    for (let i = 0; i < encryptbin.length; i += 8) {
      encrypted += String.fromCharCode(parseInt(encryptbin.substring(i, i + 8), 2));
    }
  
    let finalkey = "";
    for (let i = 0; i < keybin.length; i += 8) {
      finalkey += String.fromCharCode(parseInt(keybin.substring(i, i + 8), 2));
    }
    if (encrypted.length != input.length && finalkey.length != encrypted.length) {
        document.getElementById("encrypted").value = "Error!";
        document.getElementById("key").value = "Error!";
    }
  
    document.getElementById("encrypted").value = encrypted;
    document.getElementById("key").value = finalkey;
  }
  

function run2() {
    let input2 = document.getElementById("input2").value;
    let key2 = document.getElementById("&key").value;
    let decrypted = "";
    let bindecrypted = "";
    let key2bin = "";
    var sub = 33;
    let input2bin = "";
    for (let i = 0; i < input2.length; i++) {
        input2bin += padding(input2.charCodeAt(i).toString(2),8);
    }

    for (let i = 0; i < key2.length; i++) {
        key2bin += padding(key2.charCodeAt(i).toString(2), 8);
    }

    for(let i = 0; i < input2bin.length; i = i+8){
        bindecrypted += padding((parseInt(padding((parseInt(input2bin.substring(i,i+8),2)-sub).toString(2),8),2)^parseInt(key2bin.substring(i,i+8),2)).toString(2),8);
    }
    for (let i = 0; i < bindecrypted.length; i += 8) {
        decrypted += String.fromCharCode(parseInt(bindecrypted.substring(i, i + 8), 2));
    }
    document.getElementById("decrypted").value = decrypted;
}
  
function run3() {
    let input3 = document.getElementById("input3").value;
    let dimn = input3.naturalWidth*input3.naturalHeight;
    let key3 = Math.floor(Math.random() * dimn);
    let encrypted2 = dimn ^ key3;
    document.getElementById("encrypted2").value = encrypted2;
    document.getElementById("key2").value = key3;
}

function run4() {
    let input4 = document.getElementById("input4").value;
    let key4 = document.getElementById("&key2").value;
    let decrypted2 = input4 ^ key4;
    document.getElementById("decrypted2").value = decrypted2;
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

function restart3() {
    document.getElementById("input3").value = "";
    document.getElementById("encrypted2").value = "";
    document.getElementById("key2").value = "";
}

function restart4() {
    document.getElementById("input4").value = "";
    document.getElementById("&key2").value = "";
    document.getElementById("decrypted2").value = "";
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


function openTab(tabName,elmnt,color) {
    var i, tabContent,tab2;
    tabContent = document.getElementsByClassName("tab2content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tab2 = document.getElementsByClassName("tab2");
    for (i = 0; i < tab2.length; i++) {
        tab2[i].style.backgroundColor = "";
    }
    document.getElementById(tabName).style.display = "block";
    elmnt.style.backgroundColor = color; 
}
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen2").click();

  
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
