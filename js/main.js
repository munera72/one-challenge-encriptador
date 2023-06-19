function encrypt() {
    const plainText = document.getElementById("input-text");
    const encryptedTextContainer = document.querySelector("#output-text-container");
    let modifiedText = "";

    const regexA = new RegExp("a", "gi");
    const regexE = new RegExp("e", "gi");
    const regexI = new RegExp("i", "gi");
    const regexO = new RegExp("o", "gi");
    const regexU = new RegExp("u", "gi");

    let regexArray = [regexA, regexE, regexI, regexO, regexU]
    let encryptedArray = ["ai", "enter", "imes", "ober", "ufat"]

    for(let i = 0; i < plainText.value.length; i++) {

        let currentChar = plainText.value.charAt(i);

        if(/[aeiou]/.test(currentChar)) {
            for(let j = 0; j < regexArray.length; j ++) {
                if(regexArray[j].test(currentChar)){
                    currentChar = currentChar.replace(regexArray[j], encryptedArray[j])
                    break;
                }
            }
        }
        modifiedText += currentChar;
    }

    const encryptedText = document.createElement("p");
    encryptedText.innerHTML= modifiedText;
    encryptedTextContainer.appendChild(encryptedText);

}


function decrypt() {
    console.log("Decrypting...")
    const encryptedText = document.getElementById("input-text");
    const decryptedTextContainer = document.querySelector("#output-text-container");
    let plainText = encryptedText.value;

    const regexA = new RegExp("ai", "gi");
    const regexE = new RegExp("enter", "gi");
    const regexI = new RegExp("imes", "gi");
    const regexO = new RegExp("ober", "gi");
    const regexU = new RegExp("ufat", "gi");

    let regexArray = [regexA, regexE, regexI, regexO, regexU]
    let decryptedArray = ["a", "e", "i", "o", "u"]


    plainText = plainText.replace(regexArray[0], decryptedArray[0])
    plainText = plainText.replace(regexArray[1], decryptedArray[1])
    plainText = plainText.replace(regexArray[2], decryptedArray[2])
    plainText = plainText.replace(regexArray[3], decryptedArray[3])
    plainText = plainText.replace(regexArray[4], decryptedArray[4])

    console.log(regexA.test(plainText))

    const decryptedText = document.createElement("p");
    decryptedText.innerHTML= plainText;
    decryptedTextContainer.appendChild(decryptedText);
    
}