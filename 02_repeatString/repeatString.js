const repeatString = function(word,number) {
    let repeatingString = "";
    if(number < 0) return "ERROR";
    for(let i = 0; i < number; i++){
        repeatingString += word;

    }
    return repeatingString;
};

// Do not edit below this line
module.exports = repeatString;
