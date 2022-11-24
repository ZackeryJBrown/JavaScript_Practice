//reverses an input string by reading it in reverse and putting it into a new string character by character
var forwardString = "0123456789";

function reverseString(input){
    var output = [];
    
    for (let i = (input.length-1); i >= 0; i -= 1){
        //above iterates through a string backwards, below will put those into output array in that backward order
        //reference output, push the current index of input into it
        output.push(input[i]);
    };
    //don't forget to return the function output
    return output.join('');
};

var test = reverseString(forwardString);

console.log(test);

