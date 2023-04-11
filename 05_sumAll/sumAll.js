const sumAll = function(arg1,arg2) {
    if(!Number.isInteger(arg1) || !Number.isInteger(arg2)){
        return "ERROR";
    }
    if(arg1 < 0 || arg2 < 0) return "ERROR";
    if(arg1 > arg2){
        let argT = arg1;
        arg1 = arg2;
        arg2 = argT;
    }
    let finalNumb = 0
    for (let index = arg1; index < arg2 +1; index++) {
        finalNumb+=index
    }
console.log(finalNumb);
return(finalNumb);
};
// Do not edit below this line
module.exports = sumAll;
