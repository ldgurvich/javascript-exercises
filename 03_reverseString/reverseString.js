const reverseString = function(string) {
    let array = string.split("");
    let reverseArray = array.reverse();
    let reverseString = reverseArray.join("");
    return reverseString;

    // solution
    // return string.split('').reverse('').join('');
};

// Do not edit below this line
module.exports = reverseString;
