const reverseString = function(word) {
    let splitWord = word.split("")
    let reversedWord = splitWord.reverse()
    let finalWord = reversedWord.join("")

return finalWord;
};

// Do not edit below this line
module.exports = reverseString;
