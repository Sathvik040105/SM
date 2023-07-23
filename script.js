
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

let copybutton = document.getElementById("copybutton");
copybutton.addEventListener("click", copy);

let restartButton3 = document.getElementById("restart-button3");
restartButton3.addEventListener("click", restart3);

let inputButton4 = document.getElementById("input-button4");
inputButton4.addEventListener("click", run4);

let restartButton4 = document.getElementById("restart-button4");
restartButton4.addEventListener("click", restart4);

let inputButton5 = document.getElementById("input-button5");
inputButton5.addEventListener("click", run5);

let restartButton5 = document.getElementById("restart-button5");
restartButton5.addEventListener("click", restart5);

let inputButton6 = document.getElementById("input-button6");
inputButton6.addEventListener("click", run6);

let restartButton6 = document.getElementById("restart-button6");
restartButton6.addEventListener("click", restart6);

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

function copy() {
    let copyText = document.getElementById("key2");
    copyText.select();
    document.execCommand("copy");
}

function shuffleArray(array) {
    let string = "";
    for (let i = array.length - 1; i >= 0; i--) {
      string += String(i).padStart(String(array.length-1).length, '0') + ",";
      const j = Math.floor(Math.random() * (i + 1));
      string += String(j).padStart(String(array.length-1).length, '0') + ",";
      [array[i], array[j]] = [array[j], array[i]];
    }
    return [array, string.slice(0, -1)]; // Remove the last "," from the string
}
  
  
  function run3() {
    var imageInput = document.getElementById("input3");
    var image = imageInput.files[0];
  
    // Create a new FileReader to read the image file
    var reader = new FileReader();
  
    reader.onload = function (e) {
      var imageSrc = e.target.result;
  
      // Create a new Image element
      var img = new Image();
  
      img.onload = function () {
        // Create a new canvas element
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
  
        // Set the canvas dimensions to match the image
        canvas.width = img.width;
        canvas.height = img.height;
  
        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0);
  
        // Get the pixel data from the canvas
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let data = imageData.data; // Assuming data is a Uint8ClampedArray
  
        // Assuming you have a function to generate the key
  
        let [shuffledData, finalkey2String] = shuffleArray(data);
        // Now, 'shuffledData' contains the shuffled Uint8ClampedArray
  
        imageData.data.set(shuffledData);
        // Set the data back to the canvas
        ctx.putImageData(imageData, 0, 0); // Update the canvas
  
        var encryptedImage = document.getElementById("encrypted2");
        encryptedImage.src = canvas.toDataURL();
  
        // Assuming you have an HTML element with id "key2" to display the key
        document.getElementById("key2").value = finalkey2String;
      };
  
      // Set the source of the image to the uploaded image
      img.src = imageSrc;
    };
  
    // Read the uploaded image file as data URL
    reader.readAsDataURL(image);
  }
  

function unshuffleArray(array, string) {
    // Parse the indices from the 'string'
    const indices = [];
    const stringArray = string.split(",");
    for (let i = 0; i < stringArray.length; i += 2) {
      const iIndex = parseInt(stringArray[i], 10);
      const jIndex = parseInt(stringArray[i + 1], 10);
      indices.push({ i: iIndex, j: jIndex });
    }

    // Reverse the shuffle operation by applying the same set of indices in reverse
    for (let k = indices.length - 1; k >= 0; k--) {
      const { i: iIndex, j: jIndex } = indices[k];
      [array[iIndex], array[jIndex]] = [array[jIndex], array[iIndex]];
    }
  
    return array;
  }
  
  
  
  function run4() {
    var imageInput = document.getElementById("input4");
    var image = imageInput.files[0];

    // Create a new FileReader to read the image file
    var reader = new FileReader();

    reader.onload = function (e) {
        var imageSrc = e.target.result;

        // Create a new Image element
        var img = new Image();

        img.onload = function () {
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");

            // Set the canvas dimensions to match the image
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw the image on the canvas
            ctx.drawImage(img, 0, 0);

            // Get the pixel data from the canvas
            let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let data = imageData.data; // Assuming data is a Uint8ClampedArray

            // Assuming you have an HTML element with id "&key2" to display the key
            let finalkey2String = document.getElementById("&key2").value;

            let unshuffledData = unshuffleArray(data, finalkey2String);
            // Now, 'unshuffledData' contains the unshuffled Uint8ClampedArray

            imageData.data.set(unshuffledData);
            // Set the data back to the canvas
            ctx.putImageData(imageData, 0, 0); // Update the canvas

            var decryptedImage = document.getElementById("decrypted2");
            decryptedImage.src = canvas.toDataURL();
        };

        // Set the source of the image to the uploaded image
        img.src = imageSrc;
    };

    // Read the uploaded image file as data URL
    reader.readAsDataURL(image);
  }
  

function run5() {
    let input5 = document.getElementById("input5").value;
    let key5 = document.getElementById("key3").value;
    let encrypted2 = "";
    let encrypted2bin = "";
    //key should have at least one alpha, cap.alpha, num, special.charac and max length of key should be 8.
    let input5bin = "";
    for (let i = 0; i < input5.length; i++) {
        input5bin += padding((input5.charCodeAt(i)).toString(2), 8);
    }
    let key5bin = "";
    for (let j = 0; j < key5.length; j++) {
        key5bin += padding((key5.charCodeAt(j)).toString(2), 8);
    }

    if (input5.length <= key5.length) {
        let updtkey5bin = key5bin.substring(0, input5bin.length);
        for (let y = 0; y < input5bin.length; y = y + 8) {
            let encryp2 = (parseInt(input5bin.substring(y, y + 8), 2) ^ parseInt(updtkey5bin.substring(y, y + 8), 2)) + 33;
            encrypted2bin += (padding(encryp2.toString(2), 8));
        }

        for (let f = 0; f < encrypted2bin.length; f = f + 8) {
            encrypted2 += String.fromCharCode(parseInt(encrypted2bin.substring(f, f + 8), 2));
        }
    } else if (input5.length > key5.length) {
        let updtkey5bin0 = key5bin;
        let n = key5bin.length;
        while (n < input5bin.length) {
            updtkey5bin0 += key5bin;
            n += key5bin.length;
        }
        updtkey5bin0 = updtkey5bin0.substring(0, input5bin.length);
        for (let y = 0; y < input5bin.length; y = y + 8) {
            let encryp2 = (parseInt(input5bin.substring(y, y + 8), 2) ^ parseInt(updtkey5bin0.substring(y, y + 8), 2)) + 33;
            encrypted2bin += (padding(encryp2.toString(2), 8));
        }

        for (let f = 0; f < encrypted2bin.length; f = f + 8) {
            encrypted2 += String.fromCharCode(parseInt(encrypted2bin.substring(f, f + 8), 2));
        }

    }
    document.getElementById("encrypted3").value = encrypted2;
}


function run6(){
    let input6 = document.getElementById("input6").value
    let key6 = document.getElementById("&key3").value
    let decrypted2 = "";
    let decrypted2bin = "";
    let input6bin = "";
    for (let i = 0; i < input6.length; i++) {
        input6bin += padding((input6.charCodeAt(i)).toString(2), 8);
    }
    let key6bin = "";
    for (let j = 0; j < key6.length; j++) {
        key6bin += padding((key6.charCodeAt(j)).toString(2), 8);
    }

    if (input6.length <= key6.length) {
        let updtkey6bin = key6bin.substring(0, input6bin.length);
        for (let y = 0; y < input6bin.length; y = y + 8) {
            let decryp2 = ((parseInt(input6bin.substring(y, y + 8), 2)-33) ^ parseInt(updtkey6bin.substring(y, y + 8), 2)) //% 223 + 33;
            decrypted2bin += (padding(decryp2.toString(2), 8));
        }

        for (let f = 0; f < decrypted2bin.length; f = f + 8) {
            decrypted2 += String.fromCharCode(parseInt(decrypted2bin.substring(f, f + 8), 2));
        }
    } else if (input6.length > key6.length) {
        let updtkey6bin0 = key6bin;
        let n = key6bin.length;
        while (n < input6bin.length) {
            updtkey6bin0 += key6bin;
            n += key6bin.length;
        }
        updtkey6bin0 = updtkey6bin0.substring(0, input6bin.length);
        for (let y = 0; y < input6bin.length; y = y + 8) {
            let decryp2 = ((parseInt(input6bin.substring(y, y + 8), 2)-33) ^ parseInt(updtkey6bin0.substring(y, y + 8), 2)) //% 223 + 33;
            decrypted2bin += (padding(decryp2.toString(2), 8));
        }

        for (let f = 0; f < decrypted2bin.length; f = f + 8) {
            decrypted2 += String.fromCharCode(parseInt(decrypted2bin.substring(f, f + 8), 2));
        }

    }
    document.getElementById("decrypted3").value = decrypted2;
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
    document.getElementById("encrypted2").src = "";
    document.getElementById("key2").value = "";
}

function restart4() {
    document.getElementById("input4").value = "";
    document.getElementById("&key2").value = "";
    document.getElementById("decrypted2").src = "";
}

function restart5(){
    document.getElementById("input5").value = "";
    document.getElementById("encrypted3").value = "";
    document.getElementById("key3").value = "";
}

function restart6(){
    document.getElementById("input6").value = "";
    document.getElementById("&key3").value = "";
    document.getElementById("decrypted3").value = "";
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


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myDropdown").value = "subpage0"; // Set the value of the dropdown to "subpage1"
    opensubTab(); // Call the opensubTab function on page load to display the selected content
});

function opensubTab() {
    var dropdown = document.getElementById("myDropdown");
    var selectedOption = dropdown.value;
    
    var contentcontainer = document.getElementById("contentcontainer");
    var subpagecontents = contentcontainer.querySelectorAll(".subpagecontent");

    if (subpagecontents) {
        for (var i = 0; i < subpagecontents.length; i++) {
            subpagecontents[i].style.display = "none";
        }
    }

    if (selectedOption !== "") {
        var selectedcontent = document.getElementById(selectedOption + "content");
        if (selectedcontent) {
            selectedcontent.style.display = "block";
        }
    }
}
document.getElementById("defaultOpen3").onselect()

  




let linkedinsathvButton = document.getElementById("linkedin-button");
linkedinsathvButton.addEventListener("click", website);
  
let linkedinsaiButton = document.getElementById("linkedin-button1");
linkedinsaiButton.addEventListener("click", website1);

function website() {
    window.open("https://www.linkedin.com/in/sathvik-manthri-365984259/");
}

function website1() {
    window.open("https://www.linkedin.com/in/nagasai-jajapuram-1b8a73273/");
}

let gitsathvButton = document.getElementById("git-button");
gitsathvButton.addEventListener("click", website2);
  
let gitsaiButton = document.getElementById("git-button1");
gitsaiButton.addEventListener("click", website3);

function website2() {
    window.open("https://github.com/Sathvik040105/");
}

function website3() {
    window.open("https://github.com/Nagasai561/");
}
