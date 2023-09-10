const keyInput = document.querySelector("#js--key");
const encryptInput = document.querySelector("#js--encrypt");
const decryptInput = document.querySelector("#js--decrypt");
function init() {

    encryptInput.addEventListener("keydown", (event) => encryptionAndDecryptionListner(event, encrypt, encryptInput));
    decryptInput.addEventListener("keydown", (event) => encryptionAndDecryptionListner(event, decrypt, decryptInput));

    keyInput.value = 2;
    encryptInput.value = "";
    decryptInput.value = "";

};

init();


/*Functions*/
function encrypt(messageToEncrypt, key) {
    let messageToEncryptLowerCase = messageToEncrypt.toLowerCase()
    let encryptedMessage = "";
    const possibleResults = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //a -> 0
    //b -> 1
    //....
    // z -> 25
    for (let i = 0; i < messageToEncryptLowerCase.length; i++) {
        const indexOfChar = possibleResults.indexOf(messageToEncryptLowerCase[i]);
        if (indexOfChar !== -1) {
            let indexOfResult = indexOfChar + key;
            if (indexOfResult > 25) {
                indexOfResult = indexOfResult - 25;
            }
            encryptedMessage = encryptedMessage + possibleResults[indexOfResult];
        }
        else {
            encryptedMessage = encryptedMessage + messageToEncryptLowerCase[i];
        }
    }
    return encryptedMessage;
}

function decrypt(messageToDecrypt, key) {
    let messageToDecryptLowerCase = messageToDecrypt.toLowerCase()
    let decryptedMessage = "";
    const possibleResults = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //a -> 0
    //b -> 1
    //....
    // z -> 25
    for (let i = 0; i < messageToDecryptLowerCase.length; i++) {
        const indexOfChar = possibleResults.indexOf(messageToDecryptLowerCase[i]);
        if (indexOfChar !== -1) {
            let indexOfResult = indexOfChar - key;
            if (indexOfResult < 0) {
                indexOfResult = indexOfResult + 25;
            }
            decryptedMessage = decryptedMessage + possibleResults[indexOfResult];
        }
        else {
            decryptedMessage = decryptedMessage + messageToDecryptLowerCase[i];
        }
    }
    return decryptedMessage;
}

function checkKey(key) {
    let parsedKey = parseInt(key);
    if (parsedKey < 0 || !parsedKey > 0) {
        parsedKey = 2;
        keyInput.value = 2;
    }
    return parsedKey;
}

function encryptionAndDecryptionListner(event, encryptOrDecryptFunction, input) {
    if (event.key === "Enter") {
        input.value = encryptOrDecryptFunction(input.value, checkKey(keyInput.value));
        input.setAttribute("disabled", "");
    }
}