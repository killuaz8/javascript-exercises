const removeFromArray = function(array,...arbArguments) {
    for(let i = 0; i < arbArguments.length; i++){
        let index = array.indexOf(arbArguments[i]);
        if (index !== -1) {
            array.splice(index, 1);
          }
       
    }

return array;
};
removeFromArray([1,2,3,4],3,2,'futon');
// Do not edit below this line
module.exports = removeFromArray;
