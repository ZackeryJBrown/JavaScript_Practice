/*
This is a compilation of frequently used functions and methods
Stock Functions are ready to import and use

*/

//array manipulation-
someArray.push() //adds the contents in () to end of array, () can take strings or arrays
.join() //returns array indexes as string, () contents will be between indexes, default comma
.filter(function(currentValue, i, array){}) //returns a new array that pass tests provided by a user defined function inside .filter()
.reduce((accumulator, currentVal) =>
            {accumulator + currentVal.somePropertyOfObject;
            return accumulator;
            },0); /*starting accumulator value, ex 0*/

someArray.flat(); // flattens recursive arrays into a single array, () is how levels deep in array to go, integer or "infinity"

someObject.every( (someObjects) => someObject.property === "someValue" ); //returns true or false based on if every instance of the checked item passing the testing function
someObject.some( (someObjects) => someObject.property === "someValue" ); //returns true or false if 1 or more of the items pass the testing function

//Stock Functions
//---------------

function isBoolean(value) {
    return typeof value === 'boolean';
};


function isEmptyString(value) {
    return typeof value === 'string' && value.trim().length === 0;
};

function binarySearch(arr, x){

    let lo = 0;
    let hi = arr.length-1;

    while (lo <= hi){
        let middle = Math.floor((lo + hi) / 2)
        if (arr[middle] === x){
            return "Item found at index: " + middle
        }else if (arr[middle] < x){
            lo = middle + 1;
        }else{
            hi = middle - 1;
        };
    };
    return "Item not found in array";
};
