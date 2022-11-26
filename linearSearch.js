var testArray = [1,2,3,4,5,6,7,8,9,0];

function linearSearch(inputArray, searchArg) {
    for (let i=0; i < inputArray.length; i++){
        if (inputArray[i] === searchArg){
            return "Search Term Found at Index: " + i;
        };
    };
    return "Search term " + searchArg + " not found";
};

console.log(linearSearch(testArray, 1));

console.log(linearSearch(testArray, 10));