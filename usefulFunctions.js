//array manipulation-
somearray.push() //adds the contents in () to end of array, () can take strings or arrays
.join() //returns array indexes as string, () contents will be between indexes, default comma
.filter(function(currentValue, i, array){}) //returns a new array that pass tests provided by a user defined function inside .filter()

//Stock Functions
//---------------

function isBoolean(value) {
    return typeof value === 'boolean';
};


function isEmptyString(value) {
    return typeof value === 'string' && value.trim().length === 0;
};
