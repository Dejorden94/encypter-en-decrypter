/*Vraag de verschillende input velden op*/
const keyInput = document.querySelector("#js--key");
const encryptInput = document.querySelector("#js--encrypt");
const decryptInput = document.querySelector("#js--decrypt");

/* Maakt een functie init aan met daarin standaard functies en waardes voor de verschillende inout velden */
function init() {

    encryptInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            /* Hier worden de waardes bepaald voor de encryptOrDycrypt functie*/
            this.value = encryptOrDycrypt(this.value, "encrypt", checkKey(keyInput.value))
            /* Zet het input veld op disabled zodat deze pas weer gebruikt kan worden nadat de pagina is herladen*/
            this.setAttribute("disabled", "")
        }
    });
    decryptInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            this.value = encryptOrDycrypt(this.value, "decrypt", checkKey(keyInput.value))
            this.setAttribute("disabled", "")
        }
    });

    keyInput.value = 2;
    encryptInput.value = "";
    decryptInput.value = "";

};

/* Roep init functie aan zodat de de waarde worden toegevoegd aan de inoute velden en de eventlistners bestaan */
init();


/*Functions*/

function encryptOrDycrypt(message, encryptOrDycrypt, key) {
    let messageToLowerCase = message.toLowerCase()
    let returnMessage = "";
    let indexOfResult = "";
    /* Array met all megelijke karakters die encypt of decrypt kunnen worden */
    const possibleResults = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //a -> 0
    //b -> 1
    //....
    // z -> 25
    for (let i = 0; i < messageToLowerCase.length; i++) {
        /* Zoek de index op basis van de possibleResults index, met als waarde het huidige karakter van de message*/
        const indexOfChar = possibleResults.indexOf(messageToLowerCase[i]);
        /* Als de index van het karakter niet -1 is da dan de letter encryoten of decrypten*/
        if (indexOfChar !== -1) {
            /* Hier wordt gekeken naar de waarde van encryptOrDycrypt. De waarde wordt aan het begin van de functie megegeven. */
            switch (encryptOrDycrypt) {
                case "encrypt":
                    /*Hier wordt de index opgeschoven met de waarde van de key (als de key bijvoorbeeld 3 is dan wordt de index met 3 opgeschoven) */
                    indexOfResult = indexOfChar + key;
                    if (indexOfResult > 25) {
                        indexOfResult = indexOfResult - 25;
                    }
                    break;
                /* Hier gebeurt hetzelfde als bij de encrypt code, alleen geen we in plaats van vooruit in de inde achteruit. */
                case "decrypt":
                    indexOfResult = indexOfChar - key;
                    if (indexOfResult < 0) {
                        indexOfResult = indexOfResult + 25;
                    }
                    break;
            }
            /* Voeg de letter uit de possible results toe aan de returnMessage met de nieuwe index (als de key 3 was en de letter b dan is de nieuwe letter bij encrypt bijvoorbeeld e).*/
            returnMessage = returnMessage + possibleResults[indexOfResult];
        }
        else {
            /* Is de index ofChar -1 dan wordt her karkater (of spatie) terug gegeven. */
            returnMessage = returnMessage + messageToLowerCase[i];
        }
    }
    return returnMessage;
};

/*Checket of de gegven key een geldig karakter is. Zo niet dan wordt deze ommgezet naar 2*/
function checkKey(key) {
    let parsedKey = parseInt(key);
    if (parsedKey < 0 || !parsedKey > 0) {
        parsedKey = 2;
        keyInput.value = 2;
    }
    return parsedKey;
}
