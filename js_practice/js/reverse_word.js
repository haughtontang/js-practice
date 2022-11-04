function reverseWord() {
    var originalWord = "w3resource";
    var conditionMet = false;
    while (conditionMet != true) {
        originalWord = reverseLetter(originalWord);
        console.log(originalWord);
        if (originalWord == "ecruoser3w") {
            break;
        }
    }
    console.log(originalWord);
    function reverseLetter(word) {
        let wordLength = word.length;
    let lastLetter = word.substring(wordLength - 1, wordLength);
    word = word.substring(0, wordLength - 1);
    return lastLetter + word;
    }
}