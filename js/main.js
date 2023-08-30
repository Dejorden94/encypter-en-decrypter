const encryptInput = document.querySelector("#js--encrypt");

function encrypt(messageToEncrypt) {
    let messageToEncryptLowerCase = messageToEncrypt.toLowerCase()
    let encryptedMessage = "";
    for (let i = 0; i < messageToEncrypt.length; i++) {
        switch (messageToEncryptLowerCase[i]) {
            case "a":
                encryptedMessage = encryptedMessage + "c";
                break;
            case "b":
                encryptedMessage = encryptedMessage + "d";
                break;
            case "c":
                encryptedMessage = encryptedMessage + "e";
                break;
            case "d":
                encryptedMessage = encryptedMessage + "f";
                break;
            case "e":
                encryptedMessage = encryptedMessage + "g";
                break;
            case "f":
                encryptedMessage = encryptedMessage + "h";
                break;
            case "g":
                encryptedMessage = encryptedMessage + "i";
                break;
            case "h":
                encryptedMessage = encryptedMessage + "j";
                break;
            case "i":
                encryptedMessage = encryptedMessage + "k";
                break;
            case "j":
                encryptedMessage = encryptedMessage + "l";
                break;
            case "k":
                encryptedMessage = encryptedMessage + "m";
                break;
            case "l":
                encryptedMessage = encryptedMessage + "n";
                break;
            case "m":
                encryptedMessage = encryptedMessage + "o";
                break;
            case "n":
                encryptedMessage = encryptedMessage + "p";
                break;
            case "o":
                encryptedMessage = encryptedMessage + "q";
                break;
            case "p":
                encryptedMessage = encryptedMessage + "r";
                break;
            case "q":
                encryptedMessage = encryptedMessage + "s";
                break;
            case "r":
                encryptedMessage = encryptedMessage + "t";
                break;
            case "s":
                encryptedMessage = encryptedMessage + "u";
                break;
            case "t":
                encryptedMessage = encryptedMessage + "v";
                break;
            case "u":
                encryptedMessage = encryptedMessage + "w";
                break;
            case "v":
                encryptedMessage = encryptedMessage + "x";
                break;
            case "w":
                encryptedMessage = encryptedMessage + "y";
                break;
            case "x":
                encryptedMessage = encryptedMessage + "z";
                break;
            case "y":
                encryptedMessage = encryptedMessage + "a";
                break;
            case "z":
                encryptedMessage = encryptedMessage + "b";
                break;
            default:
                //Als het karakter niet iets is uit he bovenstaande, dan is het het karakter wat het als was.
                encryptedMessage = encryptedMessage + messageToEncryptLowerCase[i];
        }
    }
    return encryptedMessage;
}

encryptInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        this.value = encrypt(this.value);
    }
})
