function encrypt(messageToEncrypt) {
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
            let indexOfResult = indexOfChar + 2;
            if (indexOfResult > 25) {
                indexOfResult = indexOfResult - 25;
            }
            console.log(indexOfResult);
            encryptedMessage = encryptedMessage + possibleResults[indexOfResult];
        }
        else {
            encryptedMessage = encryptedMessage + messageToEncryptLowerCase[i];
        }
    }
    return encryptedMessage;
}

function decrypt(messageToDecrypt) {
    let messageToDecryptLowerCase = messageToDecrypt.toLowerCase();
    let decryptMessage = "";

    for (let i = 0; i < messageToDecryptLowerCase.length; i++) {
        switch (messageToDecryptLowerCase[i]) {
            case "a":
                decryptMessage = decryptMessage + "y";
                break;
            case "b":
                decryptMessage = decryptMessage + "z";
                break;
            case "c":
                decryptMessage = decryptMessage + "a";
                break;
            case "d":
                decryptMessage = decryptMessage + "b";
                break;
            case "e":
                decryptMessage = decryptMessage + "c";
                break;
            case "f":
                decryptMessage = decryptMessage + "d";
                break;
            case "g":
                decryptMessage = decryptMessage + "e";
                break;
            case "h":
                decryptMessage = decryptMessage + "f";
                break;
            case "i":
                decryptMessage = decryptMessage + "g";
                break;
            case "j":
                decryptMessage = decryptMessage + "h";
                break;
            case "k":
                decryptMessage = decryptMessage + "i";
                break;
            case "l":
                decryptMessage = decryptMessage + "j";
                break;
            case "m":
                decryptMessage = decryptMessage + "k";
                break;
            case "n":
                decryptMessage = decryptMessage + "l";
                break;
            case "o":
                decryptMessage = decryptMessage + "m";
                break;
            case "p":
                decryptMessage = decryptMessage + "n";
                break;
            case "q":
                decryptMessage = decryptMessage + "o";
                break;
            case "r":
                decryptMessage = decryptMessage + "p";
                break;
            case "s":
                decryptMessage = decryptMessage + "q";
                break;
            case "t":
                decryptMessage = decryptMessage + "r";
                break;
            case "u":
                decryptMessage = decryptMessage + "s";
                break;
            case "v":
                decryptMessage = decryptMessage + "t";
                break;
            case "w":
                decryptMessage = decryptMessage + "u";
                break;
            case "x":
                decryptMessage = decryptMessage + "v";
                break;
            case "y":
                decryptMessage = decryptMessage + "w";
                break;
            case "z":
                decryptMessage = decryptMessage + "x";
                break;
            default:
                //Als het karakter niet iets is uit he bovenstaande, dan is het het karakter wat het als was.
                decryptMessage = decryptMessage + messageToDecryptLowerCase[i];
        }
    }
    return decryptMessage;
}

const encryptInput = document.querySelector("#js--encrypt");
encryptInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        this.value = encrypt(this.value);
        this.setAttribute("disabled", "");
    }
});

const decryptInput = document.querySelector("#js--decrypt");
decryptInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        this.value = decrypt(this.value);
        this.setAttribute("disabled", "");
    }
});

const keyInput = document.querySelector("#js--key");