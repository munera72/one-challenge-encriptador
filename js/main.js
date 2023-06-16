function encrypt() {
    const plainText = document.getElementById("input-text");
    const encryptedTextContainer = document.querySelector("#output-text-container");
    let modifiedText = "";

    const regexA = new RegExp("a", "gi");
    const regexE = new RegExp("e", "gi");
    const regexO = new RegExp("o", "gi");
    const regexI = new RegExp("i", "gi");
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