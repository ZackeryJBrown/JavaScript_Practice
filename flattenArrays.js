//if there are multiple arrays nested in arrays, you can flatten them into one single array

var testArray = [1, [2,3, [4]]];

//the .flat(number of levels deep to go) method allows array flattening without needing to create your own function

console.log(testArray.flat(Infinity));
