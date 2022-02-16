const removeFromArray = function(array, ...input) {
    let counter = 0;
    for (element of input) {
      let index = array.indexOf(input[counter])
      if (index > -1) {
        array.splice(index, 1);
      }
      counter++
    }
    
    return array;
  };

// Do not edit below this line
module.exports = removeFromArray;
