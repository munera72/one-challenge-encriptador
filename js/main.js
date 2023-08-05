function encrypt() {
    const plainText = document.getElementById("textbox");

    const encryptedTextContainer = document.querySelector("#message-display");
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

    document.getElementById("output-div").style.justifyContent = "flex-start"
    
    document.getElementById("no-message-display").style.display = "none";
    
    encryptedTextContainer.style.wordBreak = "break-all"
    
    encryptedTextContainer.innerHTML= modifiedText;

}


function decrypt() {
    console.log("Decrypting...")
    const encryptedText = document.getElementById("textbox");
    const decryptedTextContainer = document.querySelector("#message-display");
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

    document.getElementById("output-div").style.justifyContent = "flex-start"
    
    document.getElementById("no-message-display").style.display = "none";
    
    decryptedTextContainer.style.wordBreak = "keep-all"

    decryptedTextContainer.innerHTML= plainText;


    
}